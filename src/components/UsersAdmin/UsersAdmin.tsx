/* eslint-disable @typescript-eslint/no-misused-promises */
import { useGetUsers, useDeleteUser } from "../../hooks/useUsers";
import { TableAdmin } from "../Table/TableAdmin";
import { columns } from "../Table/ColumnsTable";
import UsersModal from "./UsersModal";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

export function UsersAdmin() {
  const [index, setIndex] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);
  const { users, total } = useGetUsers(pageSize, index);
  const [userId, setUserId] = useState<string>("");
  const [openModal, setOpenModal] = useState<string | undefined>();
  const modalProps = { openModal, setOpenModal };
  const userProps = { userId, setUserId };
  const { toast } = useToast();
  const indexProps = { index, setIndex };
  const toastInfo = {
    title: "",
    description: "",
  };

  const handleEditClick = (id: string) => {
    setUserId(id);
    setOpenModal("size");
  };

  const handleNewUserClick = () => {
    setOpenModal("size");
  };

  const handleDeleteClick = async (id: string) => {
    const { deleteUser } = useDeleteUser();

    try {
      await deleteUser(id);
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
          className="p-2 button-orange-apex col-start-7 col-span-2 dark:shadow-none"
          name="add-user"
        >
          Add New User
        </button>
      </section>
      <TableAdmin
        columns={columns({ handleEditClick, handleDeleteClick })}
        data={users ? users : []}
        totalPages={total}
        indexProps={indexProps}
        setPageSize={setPageSize}
      />
      {openModal && (
        <UsersModal userProps={userProps} modalProps={modalProps} />
      )}

      <Toaster />
    </div>
  );
}
