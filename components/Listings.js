import { useState } from "react";
import ListingsItem from "../components/ListingsItem";

export default function Listings({ orgs }) {
  const [showSectors, setShowSectors] = useState(["education", "health"]);

  //   setShowSectors((sectors) => {
  //     // if toggle is in showSectors, remove it
  //     // if toggle is not in showSectors, add it.
  //     console.log(sectors);
  //     return sectors;
  //   });

  return (
    <section className="md:max-w-3xl xl:max-w-6xl m-2 sm:m-4 md:ml-auto md:mr-auto border-b">
      <p className="max-w-3xl mr-auto ml-auto mb-2">
        The following institions all conduct business with detention centre
        providers:
      </p>

      {/* <div>
        <button onClick={() => setShowSectors("health")}>Toggle health</button>
      </div> */}

      <div className="md:flex md:flex-wrap justify-between">
        {orgs.map((organisation) => {
          if (showSectors.includes(organisation.fields.sector)) {
            return (
              <ListingsItem
                name={organisation.fields.name}
                provider={organisation.vendors}
                url={`/organisation/${organisation.fields.key}`}
                key={organisation.id}
                sector={organisation.fields.sector}
              />
            );
          }
        })}
      </div>
    </section>
  );
}
