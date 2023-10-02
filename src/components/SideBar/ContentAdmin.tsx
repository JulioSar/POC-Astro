import { AiOutlineHome } from "react-icons/ai";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function ContentAdmin() {
  return (
    <section className=" mt-10">
      <div className="px-8 py-2  text-black">
        <a className="py-2 flex flex-row gap-4 text-md font-light" href="/">
          {<AiOutlineHome className="mt-1 " />} Dashboard
        </a>
      </div>
      <Accordion type="single" collapsible className="px-8">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-md font-light">
            Configurations
          </AccordionTrigger>
          <AccordionContent>
            <section className="flex flex-col c">
              <a href="google.com" className="pr-5 pb-2 cursor-pointer">
                Applications
              </a>
              <a className="pr-5 pb-2 cursor-pointer">
                App Configuration Groups
              </a>
            </section>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        type="single"
        collapsible
        className="px-8 bg-[#E87722] text-white"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-md font-light ">
            Users
          </AccordionTrigger>
          <AccordionContent>
            <section className="flex flex-col ">
              <a className="pr-5 pb-2 cursor-pointer">Users</a>
              <a className="pr-5 pb-2 cursor-pointer">User Managment Log</a>
              <a className="pr-5 pb-2 cursor-pointer">Portal Data Audit</a>
            </section>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible className="px-8">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-md font-light">
            Interests
          </AccordionTrigger>
          <AccordionContent>
            <a className="pr-5 pb-2 cursor-pointer">Interests Categories</a>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible className="px-8">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-md font-light">
            Settings
          </AccordionTrigger>
          <AccordionContent>
            <a className="pr-5 pb-2 cursor-pointer">Portal Configurations</a>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible className="px-8">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-md font-light">
            Tools
          </AccordionTrigger>
          <AccordionContent>
            <a className="pr-5 pb-2 cursor-pointer">Document Upload</a>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
