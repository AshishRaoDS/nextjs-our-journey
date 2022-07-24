import { NextPage } from 'next';
import Gallery from '../components/Gallery/Gallery';
import Layout from '../components/Layout';

const galleryPage: NextPage = () => {

  return (
    <Layout>
      <Gallery />
    </Layout>
  )
}

export default galleryPage