import type { User } from "../types";
import { useEffect, useState } from "react";
import userService from "@/services/users";
import { usePagination } from "@/hooks/usePagination";

async function FetchDataUsersHook(pageSize: number, pageIndex?: number) {
  const usersFetch = await userService.getAll();

  const { items, totalCount } = await usePagination({
    data: {
      totalCount: usersFetch.length,
      items: usersFetch,
    },
    pageSize: pageSize,
    pageIndex: pageIndex,
  });

  return { users: items, total: totalCount };
}

// Hook to get the users
export function useGetUsers(pageSize: number, pageIndex?: number) {
  const [users, setUsers] = useState<User[]>([]);
  const [total, setTotal] = useState<number>(0);
  useEffect(() => {
    async function fetchUsers() {
      const { users, total } = await FetchDataUsersHook(pageSize, pageIndex);
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
      const userFetch = await userService.getOne(id);
      userFetch.profile_picture = undefined; // add the missing property with a default value
      setUser(userFetch);
    }

    fetchUserData();
  }, [id]);

  return user;
}
export function useUpdateUser() {
  const addData = async (user: User) => {
    await userService.update(user, user.id);
  };
  return { addData };
}

export function useAddUser() {
  const addData = async (user: User) => {
    await userService.create(user, user.id);
  };
  return { addData };
}

export function useDeleteUser() {
  const deleteUser = async (id: string) => {
    await userService.delete(id);
  };
  return { deleteUser };
}
