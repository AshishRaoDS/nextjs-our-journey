import React from 'react'
import AuthForm from '../components/Auth/AuthForm'
import Layout from '../components/Layout'

type Props = {}

const login = (props: Props) => {
  return (
    <Layout>
      <AuthForm />
    </Layout>
  )
}

export default login