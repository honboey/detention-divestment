import Head from 'next/head'
import Layout from '../components/layout'
import Lede from '../components/Lede'
import Listings from '../components/Listings'
import Filter from '../components/Filter'

export default function Home() {
  return (
    <>
     <Layout>
       <main>
         <Lede />
         <Listings />
         <Filter />
       </main>
     </Layout>
    </>
  )
}
