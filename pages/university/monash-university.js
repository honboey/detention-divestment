import Layout from '/components/layout'
import InstitutionHeader from '/components/Institution/InstitutionHeader'
import InstitutionInformation from '/components/Institution/InstitutionInformation'

export default function Home() {
  return (
    <Layout >
      <InstitutionHeader />
      <InstitutionInformation  
          InstitutionName="Monash University" 
          Provider="MSS Security" 
          Position="Dean" 
          PhoneNumber="+61 3 9925 3447"
          Email="sample@email.com.au"/>
    </Layout>
  )
}