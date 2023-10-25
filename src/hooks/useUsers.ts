import {
  fetchDataUser,
  updateUser,
  addUserData,
  deleteUserService,
  fetchSingleUserData,
  mockFetchDataUsers,
} from "@/services/users";
import type { User } from "../types";
import { useEffect, useState } from "react";

// async function mockFetchDataUsersHook() {
//   const response = await mockFetchDataUsers(); // Add await once the API is ready

//   const mappedUsers = response.map((user: User) => ({
//     id: user.id,
//     name: user.name,
//     mail: user.mail,
//     status: user.status,
//   }));
//   return response;
// }

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

async function fetchSingleUser(id: string) {
  const user = await fetchSingleUserData(id); // Add await once the API is ready
  // users.data.map
  const mappedUser = {
    id: user.data.id,
    name: user.data.name,
    mail: user.data.mail,
    status: user.data.status,
    profile_picture: user.data.profile_picture,
  };

  return { userMapped: mappedUser };
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

export function useGetSingleUser(id: string) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    async function fetchUserData() {
      const { userMapped } = await fetchSingleUser(id);
      setUser(userMapped);
    }

    fetchUserData();
  }, [id]);

  return user;
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
