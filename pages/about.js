import Layout from '../components/layout'
import Header from '../components/Header'
import About from '../components/About'

export default function Home() {
  return (
    <>
     <Layout>
       <main>
         <Header />
         <About />
       </main>
     </Layout>
    </>
  )
}
