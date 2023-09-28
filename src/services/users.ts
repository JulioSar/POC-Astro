import type { User } from "../types";
import axios from "axios";
const apiUrl = import.meta.env.PUBLIC_API_URL;
console.log(apiUrl);

export async function fetchDataUser() {
  try {
    const response = await axios.get(`${import.meta.env.PUBLIC_API_URL}/user`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function addUserData(user: User) {
  const responseAdd = await axios.put(
    `${import.meta.env.PUBLIC_API_URL}/user/${user.id}`,
    {
      name: user.name,
      mail: user.mail,
      status: user.status,
    }
  );
  return responseAdd;
}

export async function updateUser(user: User) {
  const response = await axios.patch(
    `${import.meta.env.PUBLIC_API_URL}/user/${user.id}`,
    {
      name: user.name,
      mail: user.mail,
    }
  );
  return response;
}

export async function deleteUserService(id: string) {
  const response = await axios.delete(
    `${import.meta.env.PUBLIC_API_URL}/user/${id}`
  );
  return response;
}
