import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import Applications from "../../../MOCK_DATA_APPS.json";
import { useState } from "react";
import type { ApplicationsInfo } from "@/types";

export default function ActiveApps() {
  const [numToShow, setNumToShow] = useState(3);
  const handleMore = () => {
    setNumToShow(numToShow + 3);
  };
  return (
    <>
      <section>
        <h2 className="text-2xl">Active Apps</h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(330px,1fr))] gap-6 mt-6 ">
          {Applications.slice(0, numToShow).map((app: ApplicationsInfo) => (
            <Card className="bg-gray-100  " key={app.id}>
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage src={app.application_image} />
                  <AvatarFallback className="bg-gray-300">
                    {app.application_name
                      .split(" ")
                      .map((value) => value[0].toUpperCase())}
                  </AvatarFallback>
                </Avatar>
                <CardTitle>{app.application_name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-row gap-4 ">
                <Button className="bg-[#E87722] border rounded-3xl w-44 hover:bg-white hover:text-[#E87722] hover:border-[#E87722]">
                  Launch
                </Button>
                <Button className="bg-white text-[#E87722] border border-[#E87722] rounded-3xl w-52 hover:bg-[#E87722] hover:text-white">
                  Info & Support
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <section>
          {numToShow < Applications.length && (
            <button onClick={handleMore} className="my-5 ">
              Load More...
            </button>
          )}
        </section>
      </section>
    </>
  );
}
