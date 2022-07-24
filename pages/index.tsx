import type { NextPage } from 'next'
import HomeComponent from '../components/HomeComponent'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <HomeComponent />
    </Layout>
  )
}

export default Home
