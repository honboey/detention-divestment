import Layout from '/components/layout'
import InstitutionHeader from '/components/Institution/InstitutionHeader'
import InstitutionInformation from '/components/Institution/InstitutionInformation'
import {
    getOrganisationIds,
    getOrganisationByKey,
    getRelationshipById,
    getVendorById,
  } from "../../lib/api";

export default function Home({orgData, vendorData}) {
  return (
    <Layout >
      <InstitutionHeader />
      <InstitutionInformation  
          InstitutionName={orgData.fields.name}
          Provider={vendorData.fields.name}
          Position={orgData.fields.contact}
          PhoneNumber={orgData.fields.phone}
          Email={orgData.fields.email}/>
    </Layout>
  )
}

export async function getStaticPaths() {
    // return a list of possible values for [key]
    const paths = await getOrganisationIds();
    return {
      paths,
      fallback: false,
    };
  }
  
  export async function getStaticProps({ params }) {
    // Fetch necessary data for hospital page.
    const orgData = await getOrganisationByKey(params.key);
    const relationshipId = orgData.fields.relationships[0];
    const relationshipData = await getRelationshipById(relationshipId);
    const vendorId = relationshipData.fields.vendor[0];
    const vendorData = await getVendorById(vendorId);
    // console.log(vendorData);
    return {
      props: {
        orgData,
        vendorData,
      },
    };
  }