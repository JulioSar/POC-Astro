import Applications from "../../../MOCK_DATA_APPS.json";
import type { ApplicationsInfo } from "@/types";
import AppCard from "./AppCard";

export default function ActiveApps() {
  const appsToShow = Applications.slice(0, 4);
  return (
    <>
      <section className="">
        <h2 className="text-2xl">Recent Apps</h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 mt-6 ">
          {appsToShow.map((app: ApplicationsInfo) => (
            <AppCard app={app} key={app.id} />
          ))}
        </div>
      </section>
    </>
  );
}
