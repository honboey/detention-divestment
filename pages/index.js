import Header from '../components/Header'
import Layout from '../components/layout'
import Lede from '../components/Lede'
import Listings from '../components/Listings'
import Filter from '../components/Filter'
import { getOrganisations } from "../lib/api";

export default function Home({allOrganisations}) {
  return (
    <>
     <Layout>
       <Header />
       <main>         
         <Lede />
         <Listings orgs={allOrganisations} />
         <Filter />
       </main>
     </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allOrganisations = await getOrganisations();
  // const allOrgsWithVendors = allOrganisations.map((org) => (
  //   {
  //     name: org.fields.name,
  //     key: org.fields.key,
  //     id: org.id,
  //     vendor: ""
  //   }
  // ))
  return {
    props: {
      allOrganisations
    },
  };
}