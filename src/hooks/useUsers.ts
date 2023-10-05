import {
  fetchDataUser,
  updateUser,
  addUserData,
  deleteUserService,
} from "@/services/users";
import type { User } from "../types";
import { useEffect, useState } from "react";

// Mapping the data from the API to the correct format
async function useUsers() {
  const users = await fetchDataUser(); // Add await once the API is ready

  // users.data.map
  const mappedUsers = users?.data?.map((user: User) => ({
    id: user.id,
    name: user.name,
    mail: user.mail,
    status: user.status,
    profile_picture: user.profile_picture,
  }));

  return { usersMapped: mappedUsers };
}

// Hook to get the users
export function useGetUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const fetchUsers = async () => {
      const { usersMapped } = await useUsers();
      setUsers(usersMapped);
    };
    fetchUsers();
  }, [refresh]);
  return { users, refresh, setRefresh };
}

export function useUpdateUser() {
  const addData = async (user: User) => {
    await updateUser(user);
  };

  return { addData };
}

export function useAddUser() {
  const addData = async (user: User) => {
    await addUserData(user);
  };
  return { addData };
}

export function useDeleteUser() {
  const deleteUser = async (id: string) => {
    await deleteUserService(id);
  };
  return { deleteUser };
}
