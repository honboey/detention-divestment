import Link from 'next/link'

export default function ListingsItem(props) {
    return (
        <div className="bg-white text-red-600 rounded-lg md:w-12/25 xl:w-8/25 p-2 mb-4 flex flex-col items-start justify-between">
            <h2 className="font-display text-3xl sm:text-5xl">{props.name}</h2>
            <p className="mb-2">is using the following detention centre providers: <br/> 
            • {props.provider}</p>
            <button className="bg-black rounded-lg text-white font-light p-2 align-bottom"><Link href={props.url}>Take action</Link></button>
        </div>
    )
}