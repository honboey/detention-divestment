import Head from 'next/head'
import Layout from '../components/layout'
import Lede from '../components/Lede'
import Listings from '../components/Listings'

export default function Home() {
  return (
    <>
     <Layout>
       <main>
         <Lede />
         <Listings />
       </main>
     </Layout>
    </>
  )
}
