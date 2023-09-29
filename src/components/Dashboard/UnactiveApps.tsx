import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import UnsuscribedApps from "../../../MOCK_DATA_APPS_UNSUSCRIBED.json";
import { ScrollArea } from "../ui/scroll-area";

export default function UnactiveApps() {
  return (
    <div className="border rounded-md bg-slate-100 ">
      <h1 className="text-2xl my-10 pl-10">Unsuscribed Apps</h1>

      <ScrollArea className="h-96 w-full rounded-md p-10 ">
        <div className="space-y-8">
          {UnsuscribedApps.map((unsuscribedApp) => (
            <div className="flex items-center" key={unsuscribedApp.id}>
              <Avatar className="h-9 w-9">
                <AvatarImage
                  src={unsuscribedApp.application_image}
                  alt="Application Logo"
                />
                <AvatarFallback>
                  {unsuscribedApp.application_name
                    .split(" ")
                    .map((value) => value[0].toUpperCase())}
                </AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {unsuscribedApp.application_name}
                </p>
              </div>
              <div className="ml-auto font-medium">
                <button>More Info</button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
