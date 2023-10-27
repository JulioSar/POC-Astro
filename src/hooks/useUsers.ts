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
import userService from "@/services/users2";
import { usePagination } from "@/hooks/usePagination";

async function mockFetchDataUsersHook(pageSize: number, pageIndex?: number) {
  const usersFetch = await userService.getAll();
  const { items, totalCount } = await usePagination({
    data: {
      totalCount: usersFetch.length,
      items: usersFetch,
    },
    pageSize,
    pageIndex,
  });

  return { users: items, total: totalCount };
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
