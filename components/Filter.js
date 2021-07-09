export default function Filter() {
    return (
        <div className="bg-black p-4">
            <div className="md:max-w-3xl xl:max-w-6xl m-2 sm:m-4 md:ml-auto md:mr-auto">
                <input type="text" placeholder="Filter institution by name" 
                    className="font-body font-light type-base sm:text-xl block w-full pl-7 pr-12  rounded-md"></input>
                <div className="flex justify-between">
                    <p>Universities</p>
                    <p>Hospitals</p>
                    <p>Search</p>
                </div>
            </div>
            
        </div>
    )
}