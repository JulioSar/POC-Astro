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

async function mockFetchDataUsersHook(pageSize: number, pageIndex?: number) {
  const items = await mockFetchDataUsers(pageSize, pageIndex);
  const users = items.items;
  const total = items.totalCount; // Add await once the API is ready

  return { users, total };
}

// Mapping the data from the API to the correct format
async function useUsers() {
  const usersFetch = await fetchDataUser(); //
  const users = usersFetch.data;

  return { users };
}

async function fetchSingleUser(id: string) {
  const userFetch = await fetchSingleUserData(id); // Add await once the API is ready
  const user = userFetch.data;
  return { user };
}

// Hook to get the users
export function useGetUsers(pageSize: number, pageIndex?: number) {
  const [users, setUsers] = useState<User[]>([]);
  const [total, setTotal] = useState<number>(0);
  useEffect(() => {
    async function fetchUsers() {
      const { users, total } = await mockFetchDataUsersHook(
        pageSize,
        pageIndex
      );
      const formattedUsers = users.map((user) => ({
        ...user,
        profile_picture: undefined, // add the missing property with a default value
      }));
      setUsers(formattedUsers);
      setTotal(total);
    }

    fetchUsers();
  }, [pageIndex, pageSize]);

  return { users, total };
}

export function useGetSingleUser(id: string) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    async function fetchUserData() {
      const { user } = await fetchSingleUser(id);
      setUser(user);
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
