import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="text-sm max-w-3xl m-2 sm:m-4 md:ml-auto md:mr-auto">
            <p>Powered by <Link href="https://www.riserefugee.org/"><a className="underline">RISE eX-detainees</a></Link>. As eX-detainees, Asylum seekers and Refugees in Australia, we acknowledge that the land we seek protection on is the land of Aboriginal and Torres Strait Islander Peoples whose sovereignty was never ceded. Always was, always will be Aboriginal land.</p>
        </footer>
    )
}