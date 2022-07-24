import React, { useEffect, useContext } from 'react'
import { useRouter } from "next/router"
import AuthContext from "../store/auth-context"

type Props = {}

const HomeComponent = (props: Props) => {

  const { isLoggedIn } = useContext(AuthContext)

  const router = useRouter()

  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/home")
    } else {
      router.replace("/login")
    }
  }, [isLoggedIn, router])

  return (
    <div>Home</div>
  )
}

export default HomeComponent;