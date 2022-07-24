import React from 'react'
import Header from './Shared/Header'
import { AuthContextProvider } from "../store/auth-context"

type Props = {
  children: JSX.Element,
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <AuthContextProvider>
      <Header />
      {children}
    </AuthContextProvider>

  )
}

export default Layout