import type { User } from "../types";
import axios from "axios";
import NotFoundException from "@/errors/not-found-exception-error";
import NetworkError from "@/errors/network-error";
import Users from "../../MOCK_DATA_PAGINATION.json";
import { usePagination } from "@/hooks/usePagination";

export async function mockFetchDataUsers(pageSize: number, pageIndex?: number) {
  // const response = await axios.get(`${import.meta.env.PUBLIC_API_URL}${import.meta.env.PUBLIC_API_USERS}?index=${pageIndex}&size=${pageSize}`)
  const { items, totalCount } = await usePagination({
    data: {
      totalCount: Users.totalCount,
      items: Users.items,
    },
    pageSize,
    pageIndex,
  });
  return {
    items,
    totalCount,
  };
}

export async function fetchDataUser() {
  try {
    const response = await axios.get(`${import.meta.env.PUBLIC_API_URL}/user`);
    return response.data;
  } catch (error) {
    return [];
  }
}

export async function fetchSingleUserData(id: string) {
  try {
    const response = await axios.get(
      `${import.meta.env.PUBLIC_API_URL}/user/${id}`
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // The request was made and the server responded with a status code
        if (error.response.status == 404) {
          throw new NotFoundException(
            `The user with id ${id} has not been found`
          );
        } else {
          throw new Error();
        }
      } else if (error.request) {
        // The request was made but no response was received
        throw new NetworkError("Network error");
      }
    } else {
      throw new Error();
    }
  }
}

export async function addUserData(user: User) {
  await axios
    .put(`${import.meta.env.PUBLIC_API_URL}/user/${user.id}`, {
      name: user.name,
      mail: user.mail,
      status: user.status,
    })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        if (error.response.status == 404) {
          throw new NotFoundException(
            `The user with id ${user.id} has not been found`
          );
        } else {
          throw new Error();
        }
      } else if (error.request) {
        // The request was made but no response was received
        throw new NetworkError("Network error");
      }
    });
}

export async function updateUser(user: User) {
  await axios
    .patch(`${import.meta.env.PUBLIC_API_URL}/user/${user.id}`, {
      name: user.name,
      mail: user.mail,
    })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        if (error.response.status == 404) {
          throw new NotFoundException(
            `The user with id ${user.id} has not been found`
          );
        } else {
          throw new Error();
        }
      } else if (error.request) {
        // The request was made but no response was received
        throw new NetworkError("Network error");
      }
    });
}

export async function deleteUserService(id: string) {
  await axios
    .delete(`${import.meta.env.PUBLIC_API_URL}/user/${id}`)
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        if (error.response.status == 404) {
          throw new NotFoundException(
            `The user with id ${id} has not been found`
          );
        } else {
          throw new Error();
        }
      } else if (error.request) {
        // The request was made but no response was received
        throw new NetworkError("Network error");
      }
    });
}
