import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout({children}) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
                </style> 
                <title>Detention Divestment | Refugee Lives Before Corporate Profits</title>
                <meta
                    name="description"
                    content="Find out if your university or hospital is connected to detention centre profits. Our universities and hospitals should NOT have business relationships with companies that profit from the cruel, inhumane and degrading treatment of refugees in detention."
                />
            </Head>
            <body className="font-body font-light type-base sm:text-xl text-white bg-red-600">
                <Header />
                {children}
            
                <Footer />
            </body>
        </>
    )
}