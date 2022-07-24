import { NextPage } from 'next'
import React from 'react'
import Content from '../components/Blog/Content'
import Layout from '../components/Layout'

type Props = {}

const Home: NextPage = (props: Props) => {

  return (
    <Layout>
      <Content />
    </Layout>
  )
}

export default Home