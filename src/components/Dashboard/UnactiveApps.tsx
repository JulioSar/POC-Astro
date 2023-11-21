import UnsuscribedApps from "../../../MOCK_DATA_APPS_UNSUSCRIBED.json";
import Search from "../ui/search";
import AppCard from "./AppCard";
import { useState } from "react";

export default function UnactiveApps() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pagination, setPagination] = useState(4);
  const searchProps = {
    searchTerm: searchTerm,
    setSearchTerm: setSearchTerm,
  };

  const filteredApps = UnsuscribedApps.filter((app) =>
    app.application_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const showAllHandler = () => {
    setPagination(filteredApps.length);
  };

  return (
    <div className="">
      <h1 className="text-2xl my-10 ">Apps</h1>

      <Search searchProps={searchProps} />

      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 mt-6 ">
        {filteredApps.slice(0, pagination).map((unsuscribedApp) => (
          <AppCard app={unsuscribedApp} key={unsuscribedApp.id} />
        ))}
      </div>
      {pagination < filteredApps.length && (
        <button className="text-sm mt-10" onClick={showAllHandler}>
          Show All
        </button>
      )}
    </div>
  );
}
