import Head from 'next/head'

export default function Layout({children}) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
            </Head>
            <header>
                logo and header here
            </header>
            <main>{children}</main>
            <footer>this is the footer</footer>
        </>
    )
}