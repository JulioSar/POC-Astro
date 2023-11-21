import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardHeader, CardTitle } from "../ui/card";
import type { ApplicationsInfo } from "@/types";

export default function AppCard({ app }: { app: ApplicationsInfo }) {
  const Tag = app.active ? "a" : "div";
  return (
    <Tag
      href={app.active ? app.application_link[0] : undefined}
      target={app.active ? "_blank" : undefined}
      rel="noopener noreferrer"
      key={app.id}
    >
      <Card
        className={` ${
          app.active
            ? "bg-[#757D8A] hover:scale-105 transition duration-300"
            : "bg-[#F0EDED]"
        } h-16 flex flex-col items-start justify-center shadow-xl  `}
      >
        <CardHeader className="flex flex-row items-center gap-4 w-full">
          <Avatar>
            <AvatarImage src={app.application_image} />
            <AvatarFallback
              className={` ${
                app.active ? "text-[#404D61]" : "text-[#B5B5B5]"
              } bg-white `}
            >
              {app.application_name
                .split(" ")
                .map((value) => value[0].toUpperCase())}
            </AvatarFallback>
          </Avatar>
          <CardTitle
            className={`${app.active ? "text-white" : "text-[#B5B5B5]"} w-full`}
          >
            <p>{app.application_name}</p>
          </CardTitle>
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
            >
              <g clipPath="url(#clip0_94_247)">
                <path
                  d="M14.4621 8.75H16.9885V11.25H14.4621V8.75ZM15.7253 21.25C16.4201 21.25 16.9885 20.6875 16.9885 20V15C16.9885 14.3125 16.4201 13.75 15.7253 13.75C15.0305 13.75 14.4621 14.3125 14.4621 15V20C14.4621 20.6875 15.0305 21.25 15.7253 21.25ZM15.7253 2.5C8.75242 2.5 3.09326 8.1 3.09326 15C3.09326 21.9 8.75242 27.5 15.7253 27.5C22.6982 27.5 28.3573 21.9 28.3573 15C28.3573 8.1 22.6982 2.5 15.7253 2.5ZM15.7253 25C10.1546 25 5.61967 20.5125 5.61967 15C5.61967 9.4875 10.1546 5 15.7253 5C21.296 5 25.8309 9.4875 25.8309 15C25.8309 20.5125 21.296 25 15.7253 25Z"
                  fill={app.active ? "#ffffff" : "#757D8A"}
                />
              </g>
            </svg>
          </button>
        </CardHeader>
      </Card>
    </Tag>
  );
}
