import { useState } from "react";
import ListingsItem from "../components/ListingsItem";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Listings({ orgs }) {
  const [showSectors, setShowSectors] = useState({
    education: true,
    health: true,
  });
  const [educationEnabled, setEducactionEnabled] = useState(true);
  const [healthEnabled, setHealthEnabled] = useState(true);

  return (
    <section className="border-b">
      <p className="max-w-3xl mr-auto ml-auto mb-2 p-2">
        The following institions all conduct business with detention centre
        providers:
      </p>

      <div className="bg-black py-1 px-2">
        <div className="max-w-3xl mr-auto ml-auto my-2 flex">
          <Switch.Group
            as="div"
            className="flex items-center w-1/2"
            onClick={() => {
              setShowSectors({
                education: !showSectors.education,
                health: showSectors.health,
              });
            }}
          >
            <Switch
              checked={educationEnabled}
              onChange={setEducactionEnabled}
              className={classNames(
                educationEnabled ? "bg-red-600" : "bg-gray-200",
                "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
              )}
            >
              <span
                aria-hidden="true"
                className={classNames(
                  educationEnabled ? "translate-x-5" : "translate-x-0",
                  "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                )}
              />
            </Switch>
            <Switch.Label as="span" className="ml-3">
              <span className="font-light text-white">Education</span>
            </Switch.Label>
          </Switch.Group>

          <Switch.Group
            as="div"
            className="flex items-center w-1/2"
            onClick={() => {
              setShowSectors({
                education: showSectors.education,
                health: !showSectors.health,
              });
            }}
          >
            <Switch
              checked={healthEnabled}
              onChange={setHealthEnabled}
              className={classNames(
                healthEnabled ? "bg-red-600" : "bg-gray-200",
                "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
              )}
            >
              <span
                aria-hidden="true"
                className={classNames(
                  healthEnabled ? "translate-x-5" : "translate-x-0",
                  "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                )}
              />
            </Switch>
            <Switch.Label as="span" className="ml-3">
              <span className="font-light text-white">Health</span>
            </Switch.Label>
          </Switch.Group>
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
