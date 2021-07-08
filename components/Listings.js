import ListingsItem from '../components/ListingsItem'

export default function Listings() {
    return (
        <section className="max-w-7xl ml-auto mr-auto border-b">
            <p className="mb-2">The following institions all conduct business with detention centre providers:</p>
            <div className="md:flex md:flex-wrap">
                <ListingsItem />
                <ListingsItem />
                <ListingsItem />
                <ListingsItem />
            </div>

        </section>
    )
}