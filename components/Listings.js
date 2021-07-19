import { useState } from "react";
import ListingsItem from "../components/ListingsItem";

export default function Listings({ orgs }) {
  const [showSectors, setShowSectors] = useState({
    education: true,
    health: true
  });

  return (
    <section className="md:max-w-3xl xl:max-w-6xl m-2 sm:m-4 md:ml-auto md:mr-auto border-b">
      <p className="max-w-3xl mr-auto ml-auto mb-2">
        The following institions all conduct business with detention centre
        providers:
      </p>

      <div>
        <button onClick={() => {
          setShowSectors({
            education: !showSectors.education,
            health: showSectors.health
          })
        }}>Toggle education</button>

        <button onClick={() => {
          setShowSectors({
            education: showSectors.education,
            health: !showSectors.health
          })
        }}>Toggle health</button>
      </div>

      <div className="md:flex md:flex-wrap justify-between">
        {orgs.filter(filterOrgs => showSectors[filterOrgs.fields.sector]).map(org => (
          <ListingsItem
            name={org.fields.name}
            provider={org.vendors}
            url={`/organisation/${org.fields.key}`}
            key={org.id}
            sector={org.fields.sector}
          />
        ))}
      </div>
    </section>
  );
}
