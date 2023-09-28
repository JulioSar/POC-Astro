import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import Applications from "../../../MOCK_DATA_APPS.json";

export default function ActiveApps() {
  return (
    <>
      <section>
        <h2>Active Apps</h2>
        <div className="grid lg:grid-cols-3 gap-6 mt-6 md:grid-cols-2 sm:grid-cols-1">
          {Applications.map((app) => (
            <Card className="bg-gray-100 " key={app.id}>
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage src={app.application_image} className="" />
                  <AvatarFallback>
                    {app.application_name
                      .split(" ")
                      .map((value) => value[0].toUpperCase())}
                  </AvatarFallback>
                </Avatar>
                <CardTitle>{app.application_name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-row gap-4 ">
                <Button>Launch</Button>
                <Button>More Info</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
