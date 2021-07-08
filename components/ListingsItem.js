export default function ListingsItem() {
    return (
        <div className="bg-white text-red-600 rounded-lg md:max-w-xs p-2 mb-4">
            <h2 className="font-display text-3xl sm:text-5xl">Monash University</h2>
            <p className="mb-2">is using the following detention centre providers: <br/>
            • MSS</p>
            <button className="bg-black rounded-lg text-white font-light p-2"><a href="">Take action</a></button>
        </div>
    )
}