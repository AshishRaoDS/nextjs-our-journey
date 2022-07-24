import { NextPage } from 'next'
import React, { useContext, useEffect } from 'react'
import Content from '../components/Blog/Content'
import Layout from '../components/Layout'
import AuthContext from '../store/auth-context'
import { useRouter } from "next/router"

type Props = {}

const Home: NextPage = (props: Props) => {

  return (
    <Layout>
      <Content />
    </Layout>
  )
}

export default Home