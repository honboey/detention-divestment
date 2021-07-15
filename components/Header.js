import Link from 'next/link'

export default function Header() {
    return (
        <header className="bg-gradient-to-t from-red-600 to-white p-2 sm:p-4">
            <div className="max-w-3xl ml-auto mr-auto">
                <Link href="/">
                    <a>
                        <h1 className="mb-2">
                            <svg width="100%" height="auto" viewBox="0 0 382 147" xmlns="http://www.w3.org/2000/svg" fill="black"><path d="M0 1.2L19.5 1.2C27.1 1.2 31.8 4.8 31.8 14.7L31.8 48.4C31.8 58 27.6 62.5 19.6 62.5H0L0 1.2ZM13.4 50.7H15.3C17.3 50.7 17.9 49.5 17.9 47L17.9 16.1C17.9 13.6 17.3 12.5 15.4 12.5H13.4L13.4 50.7Z"  /><path d="M59.2 1.2V13.9L47.4 13.9V24.3H56.8L56.8 37.3 47.4 37.3V49.5L59.7 49.5 59.7 62.5 34.2 62.5 34.2 1.2 59.2 1.2Z"  /><path d="M89.9 1.2V13.9L82.1 13.9 82.1 62.5H68.3L68.3 13.9 60.5 13.9V1.2L89.9 1.2Z"  /><path d="M116.5 1.2V13.9L104.7 13.9V24.3H114.1V37.3L104.7 37.3V49.5L117 49.5 117 62.5 91.5 62.5 91.5 1.2 116.5 1.2Z"  /><path d="M132.2 1.2L139.1 30.8V1.2L150.4 1.2V62.5L138.8 62.5 130.9 30.5V62.5H119.4L119.4 1.2 132.2 1.2Z"  /><path d="M181.5 1.2V13.9L173.8 13.9V62.5H160.4V13.9L152.8 13.9V1.2L181.5 1.2Z"  /><path d="M196.6 62.5H183V1.2L196.6 1.2V62.5Z"  /><path d="M232.4 46.7C232.4 57.2 226.4 63.3 217 63.3H214.4C204.4 63.3 199 57.3 199 46.7V17.7C198.8 7.1 203.3 0.4 214.3 0.4L216.9 0.4C227.9 0.4 232.4 7.3 232.4 17.7V46.7ZM218.1 16.2C218.1 13.9 217.5 12.7 215.7 12.7 213.9 12.7 213.2 13.9 213.2 16.2V47.5C213.2 49.2 213.9 50.6 215.8 50.6 217.6 50.6 218.3 49.4 218.3 47.5V16.2H218.1Z"  /><path d="M247.6 1.2L254.5 30.8V1.2L265.8 1.2V62.5L254.2 62.5 246.3 30.5V62.5H234.8V1.2L247.6 1.2Z"  /><path d="M0 68H23.9C33.3 68 39 72.7 39 85.1L39 127.5C39 139.5 33.8 145.2 23.9 145.2H0L0 68ZM16.6 130.4H18.8C21.2 130.4 22 128.9 22 125.7L22 86.7C22 83.6 21.4 82.2 19.1 82.2H16.6L16.6 130.4Z"  /><path d="M59.7 145.2H43L43 68H59.7L59.7 145.2Z"  /><path d="M60.5 68H78.5L83.1 116.3 87.8 68H104.3L93.9 145.2H71.5L60.5 68Z"  /><path d="M137 68V84H122.3V97.2H134.1V113.6H122.3L122.3 129H137.7V145.2H105.8L105.8 68H137Z"  /><path d="M161.4 67.2C173.7 67.2 178 73.3 178 82.9V92.1H161.9V83.9C161.9 81.9 161.4 80.6 159.4 80.6 157.5 80.6 156.8 81.9 156.8 84V85.9C156.8 89 157.5 90.9 160.4 93.8L169.1 101.6C176.7 108.7 179.1 113.9 179.1 122.2V126C179.1 137.8 173.3 146 160.4 146H156.8C145.3 146 139.3 140.2 139.3 129.1V116.8H155.6V127.3C155.6 129.9 156.3 131.4 158.4 131.4 160.4 131.4 161.2 129.9 161.2 126.9V124.9C161.2 120.4 161 118.7 157.2 115.3L148.6 107.3C142.3 101.6 139.9 95.4 139.9 87.5V83.9C139.9 73.7 145.9 67.4 157.5 67.4H161.4V67.2Z"  /><path d="M215.7 68V84H206.1V145.2H189.3V84H179.9V68H215.7Z"  /><path d="M218.1 68H238.2L242.4 104.2 246.8 68 265.8 68V145.2H251.3V103.1L244.8 145.2H238.8L232.3 103.1V145.2H218.1V68Z"  /><path d="M301 68V84H286.2V97.2H298V113.6H286.2V129H301.6V145.2H269.8V68H301Z"  /><path d="M320.5 68L329.3 105.4V68H343.8V145.2H328.9L318.8 104.9V145.1H304V68H320.5Z"  /><path d="M382 68V84H372.5V145.2H355.7V84H346.2V68H382Z"  /></svg>
                        </h1>
                    </a>
                </Link>

                <nav className="border-b pb-4">
                    <p><Link href="/about"><a className="underline text-black">Learn about the campaign</a></Link></p>
                </nav>
            </div>

        </header>
    )
}