import ListingsItem from '../components/ListingsItem'

export default function Listings() {
    return (
        <section className="md:max-w-3xl xl:max-w-6xl m-2 sm:m-4 md:ml-auto md:mr-auto border-b">
            <p className="max-w-3xl mr-auto ml-auto mb-2">The following institions all conduct business with detention centre providers:</p>
            <div className="md:flex md:flex-wrap justify-between">
                <ListingsItem name="Monash University" provider="MSS" url="/university/monash-university"/>
                <ListingsItem name="Swinburne University of Technology" provider="Wilson Security" url="/university/monash-university" />
                <ListingsItem name="University of New South Wales" provider="MSS" url="/university/monash-university" />
                <ListingsItem name="Melbourne University" provider="MSS" url="/university/monash-university"/>
                <ListingsItem name="Monash University" provider="MSS" url="/university/monash-university"/>
                <ListingsItem name="Swinburne University of Technology" provider="Wilson Security" url="/university/monash-university" />
                <ListingsItem name="University of New South Wales" provider="MSS" url="/university/monash-university" />
                <ListingsItem name="Melbourne University" provider="MSS" url="/university/monash-university"/>
                <ListingsItem name="Monash University" provider="MSS" url="/university/monash-university"/>
                <ListingsItem name="Swinburne University of Technology" provider="Wilson Security" url="/university/monash-university" />
                <ListingsItem name="University of New South Wales" provider="MSS" url="/university/monash-university" />
                <ListingsItem name="Melbourne University" provider="MSS" url="/university/monash-university"/>
            </div>

        </section>
    )
}