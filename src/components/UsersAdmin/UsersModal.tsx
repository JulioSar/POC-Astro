import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useState } from "react";
import { UserContact } from "../UsersAdmin/UserContact";
import UserAudit from "./UserAudit";
import { Modal } from "flowbite-react";
import { useGetSingleUser } from "@/hooks/useUsers";
import { NewUser } from "./Entities/new-user";

interface UsersModalProps {
  userProps: {
    userId: string;
    setUserId: (value: string) => void;
  };
  modalProps: {
    openModal: string | undefined;
    setOpenModal: (value: string | undefined) => void;
  };
}

export default function UsersModal({ userProps, modalProps }: UsersModalProps) {
  const userId = userProps.userId;
  const isNewUser = userId === "";
  console.log("isNewUser", isNewUser);
  const user = !isNewUser ? useGetSingleUser(userId) : new NewUser();

  const [editName, setEditName] = useState(isNewUser);
  const [tab, setTab] = useState("contact");

  function handleModalClose() {
    modalProps.setOpenModal(undefined);
    userProps.setUserId("");
  }

  return (
    <Modal
      dismissible
      show={modalProps.openModal === "size"}
      size={"7xl"}
      onClose={handleModalClose}
    >
      <Modal.Header />
      <Modal.Body>
        <section className="grid gird-cols-6 gap-4 p-2">
          <div className="col-start-1 col-end-3 col-span-2 flex flex-row justify-start items-center gap-10">
            {isNewUser ? (
              <input className="w-24 h-24 rounded-full bg-slate-500" />
            ) : (
              <Avatar className="w-24 h-24 text-3xl">
                {/* .original is used to access the data value of the row */}
                <AvatarImage src={user?.profile_picture} />
                <AvatarFallback>
                  {user?.name
                    .split(" ")
                    .slice(0, 2)
                    .map((value) => value[0].toUpperCase())}
                </AvatarFallback>
              </Avatar>
            )}

            <div className="flex flex-col gap-2">
              <h1 className="text-2xl">{user?.name ? user.name : ""}</h1>
              {!isNewUser && (
                <a
                  className="text-xs cursor-pointer"
                  onClick={() => setEditName(!editName)}
                >
                  Edit name
                </a>
              )}
            </div>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-3 gap-10 mb-8 shadow-sm rounded-sm ">
            <button
              onClick={() => setTab("contact")}
              className={`${
                tab === "contact" ? "bg-gray-300 rounded-t-lg " : "bg-none"
              }`}
            >
              Profile
            </button>

            <button
              onClick={() => setTab("organization")}
              className={`${
                tab === "organization" ? "bg-gray-300 rounded-t-lg " : "bg-none"
              }`}
            >
              Chart
            </button>
            <button
              onClick={() => setTab("audit")}
              className={`${
                tab === "audit" ? "bg-gray-300 rounded-t-lg " : "bg-none"
              }`}
            >
              Audit
            </button>
          </div>
        </section>

        {tab === "contact" ? (
          user && (
            <UserContact
              userClicked={user}
              editName={editName}
              isNewUser={isNewUser}
            />
          )
        ) : tab === "organization" ? (
          <h1>Chart goes here</h1>
        ) : (
          tab === "audit" && <UserAudit />
        )}
      </Modal.Body>
    </Modal>
  );
}
