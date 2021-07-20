import { useState } from "react";
import ListingsItem from "../components/ListingsItem";

export default function Listings({ orgs }) {
  const [showSectors, setShowSectors] = useState({
    education: true,
    health: true,
  });

  return (
    <section className="border-b">
      <p className="max-w-3xl mr-auto ml-auto mb-2">
        The following institions all conduct business with detention centre
        providers:
      </p>

      <div className="bg-black py-1">
        <div className="max-w-3xl mr-auto ml-auto my-2">
          <div class="flex items-center">
            <button
              type="button"
              className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              role="switch"
              aria-checked="false"
              aria-labelledby="annual-billing-label"
              onClick={() => {
                setShowSectors({
                  education: !showSectors.education,
                  health: showSectors.health,
                });
              }}
            >
              <span
                aria-hidden="true"
                class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
              ></span>
            </button>
            <span class="ml-3" id="annual-billing-label">
              <span class="text-white font-light">Education </span>
            </span>
          </div>

          <button
            className="text-white font-light"
            onClick={() => {
              setShowSectors({
                education: showSectors.education,
                health: !showSectors.health,
              });
            }}
          >
            Toggle health
          </button>
        </div>
      </div>
      <div className="md:max-w-3xl xl:max-w-6xl m-2 sm:m-4 md:ml-auto md:mr-auto">
        <div className="md:flex md:flex-wrap justify-between">
          {orgs
            .filter((filterOrgs) => showSectors[filterOrgs.fields.sector])
            .map((org) => (
              <ListingsItem
                name={org.fields.name}
                provider={org.vendors}
                url={`/organisation/${org.fields.key}`}
                key={org.id}
                sector={org.fields.sector}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
