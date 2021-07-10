import Layout from '/components/layout'
import InstitutionHeader from '/components/InstitutionHeader'
import InstitutionLede from '/components/InstitutionLede'
import Share from '/components/Share'
import Phone from '/components/Phone'
import Email from '/components/Email'
import Footer from '/components/Footer'



export default function Home() {
  return (
    <Layout >
      <article>
        <InstitutionLede InstitutionName="Monash University" Provider="MSS"/>
        <Share />
        <Phone InstitutionName="Monash University" Position="Dean" PhoneNumber="+61 3 9925 3447" Provider="MSS"/>
        <Email InstitutionName="Monash University" Email="sample@email.com.au" Provider="MSS"/>
      </article>
      <Footer />
    </Layout>
  )
}