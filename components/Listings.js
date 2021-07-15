import ListingsItem from '../components/ListingsItem'

export default function Listings({orgs}) {
    return (
        <section className="md:max-w-3xl xl:max-w-6xl m-2 sm:m-4 md:ml-auto md:mr-auto border-b">
            <p className="max-w-3xl mr-auto ml-auto mb-2">The following institions all conduct business with detention centre providers:</p>
            <div className="md:flex md:flex-wrap justify-between">
            {orgs.map((organisation) => (
                <ListingsItem name={organisation.fields.name} provider={organisation.vendor.fields.name} url={`/organisation/${organisation.fields.key}`} key={organisation.id}/>
            ))}
            </div>

        </section>
    )
}