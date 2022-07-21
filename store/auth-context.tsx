import React, { useState, useEffect } from "react"

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token: string, expirationTime: string) => { },
  logout: () => { }
})

let logoutTimer: any;

const calculateRemainingTime = (expirationTime: string) => {
  const currentTime = new Date().getTime();
  const expiration = new Date(expirationTime).getTime();

  const remainingTime = expiration - currentTime;

  return remainingTime;
}

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token")
  const expirationTime = localStorage.getItem("expirationTime") || "";

  const remainingTime = calculateRemainingTime(expirationTime)

  if (remainingTime <= 0) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return;
  }

  return {
    token: storedToken,
    duration: remainingTime
  }
}

export const AuthContextProvider = (props: any) => {
  const tokenData = retrieveStoredToken()
  let initialToken = "";
  if (tokenData?.token) {
    initialToken = tokenData.token;
  }
  const [token, setToken] = useState(initialToken)

  const isLoggedIn = !!token

  const loginHandler = (token: string, expirationTime: string) => {
    setToken(token)
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  }

  const logoutHandler = () => {
    setToken("")
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    if (logoutTimer) {
      clearTimeout(logoutTimer)
    }
  }

  const authContextValue = {
    token,
    isLoggedIn,
    login: loginHandler,
    logout: logoutHandler
  }


  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData])

  return (
    <AuthContext.Provider value={authContextValue} >{props.children}</AuthContext.Provider>
  )
}

export default AuthContext;

