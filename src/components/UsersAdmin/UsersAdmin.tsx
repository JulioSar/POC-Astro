/* eslint-disable @typescript-eslint/no-misused-promises */
import { useGetUsers, useDeleteUser } from "../../hooks/useUsers";
import { TableAdmin } from "../Table/TableAdmin";
import { columns } from "../Table/ColumnsTable";
import UsersModal from "./UsersModal";
import { useState } from "react";
import type { User } from "@/types";
import { v4 as uuidv4 } from "uuid";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

export function UsersAdmin() {
  const { users, refresh, setRefresh } = useGetUsers();
  const [userClicked, setUserClicked] = useState<User>();
  const { toast } = useToast();
  const [openModal, setOpenModal] = useState<string | undefined>();
  const toastInfo = {
    title: "",
    description: "",
  };

  function handleModalClose() {
    setOpenModal(undefined);
  }

  function onRefresh() {
    setRefresh(!refresh);
  }
  const handleEditClick = (id: string) => {
    const userClickedHandler = users.find((user) => user.id === id);
    setUserClicked(userClickedHandler);
    setOpenModal("size");
  };

  const handleNewUserClick = () => {
    const newUser: User = {
      name: "",
      mail: "",
      status: false,
      id: uuidv4(),
      profile_picture: "",
    };
    setUserClicked(newUser);
    setOpenModal("size");
  };

  const handleDeleteClick = async (id: string) => {
    const { deleteUser } = useDeleteUser();

    try {
      await deleteUser(id);
      onRefresh();
      toastInfo.title = "User deleted successfully";
      toastInfo.description =
        "The user data has been deleted from data base correctly.";
    } catch (error) {
      toastInfo.title = "Unable to delete user data";
      toastInfo.description = `There has been an error while deleting data. Please try again.${error}`;
    }
    toast(toastInfo);
  };

  return (
    <div>
      <section className="grid grid-cols-6 gap-4 w-full pr-10">
        <button
          onClick={handleNewUserClick}
          className="p-2 button-add col-start-7 col-span-2 text-white dark:shadow-none"
        >
          Add New User
        </button>
      </section>

      <TableAdmin
        columns={columns({ handleEditClick, handleDeleteClick })}
        data={users}
      />
      {userClicked && (
        <UsersModal
          user={userClicked}
          modalVisible={openModal}
          closedModal={handleModalClose}
          setRefresh={onRefresh}
        />
      )}

      <Toaster />
    </div>
  );
}
