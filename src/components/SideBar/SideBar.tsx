import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AvatarPic from "../../assets/avatar_pic.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AiOutlinePoweroff } from "react-icons/ai";
import type { ReactNode } from "react";

interface SideBarProps {
  children: ReactNode;
}

export default function SideBar({ children }: SideBarProps) {
  const name = "Julio Sarmiento";

  return (
    <aside className=" bg-gray-100 h-full dark:bg-gray-900 border rounded-r-3xl">
      {/* User Info */}
      <section className=" grid grid-rows-2 grid-flow-col gap-0 max-h-80 lg:grid-cols-[4rem_10rem] pt-10 ml-5">
        <Avatar className="row-span-2 w-14 h-14">
          <AvatarImage src={AvatarPic.src} alt="User picture" />
          <AvatarFallback className="bg-gray-200">
            {name
              .split(" ")
              .slice(0, 2)
              .map((value) => value[0].toUpperCase())}
          </AvatarFallback>
        </Avatar>

        <p className="text-gray-500 text-xs flex flex-col-reverse">
          Welcome back
        </p>
        <h3 className="">{name}</h3>
      </section>
      {/* Menu */}
      {children}

      {/* SignOut */}
      <section className="justify-self-end fixed bottom-3">
        <button className="py-2 flex flex-row p-8 gap-2">
          {<AiOutlinePoweroff className="mt-1 stroke-w" />} Sign Out
        </button>
      </section>
    </aside>
  );
}
