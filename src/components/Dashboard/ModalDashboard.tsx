import { Modal } from "flowbite-react";
import { ModalHeader } from "flowbite-react/lib/esm/components/Modal/ModalHeader";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import type { ApplicationsInfo } from "@/types";

export default function DashboardMolda(props: ApplicationsInfo) {
  const [tab, setTab] = useState("about");
  return (
    // <Modal>
    //   <ModalHeader>
    //     <Avatar>
    //       <AvatarImage src={props.application_image} />
    //       <AvatarFallback className="bg-gray-300">
    //         {props.application_name
    //           .split(" ")
    //           .map((value) => value[0].toUpperCase())}
    //       </AvatarFallback>
    //     </Avatar>
    //   </ModalHeader>
    //   <Modal.Body>
    //     <section>
    //       <div className="grid grid-cols-3 gap-10 mb-8 shadow-sm rounded-sm ">
    //         <button
    //           onClick={() => setTab("about")}
    //           className={`${
    //             tab === "about" ? "bg-gray-300 rounded-t-lg " : "bg-none"
    //           }`}
    //         >
    //           About
    //         </button>

    //         <button
    //           onClick={() => setTab("user_agreement")}
    //           className={`${
    //             tab === "user_agreement"
    //               ? "bg-gray-300 rounded-t-lg "
    //               : "bg-none"
    //           }`}
    //         >
    //           User Agreemet
    //         </button>
    //       </div>
    //     </section>
    //     <section>
    //       {tab === "about" ? <section></section> : <section></section>}
    //     </section>
    //   </Modal.Body>
    // </Modal>
    <h1>Hi</h1>
  );
}
