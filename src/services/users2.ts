import type { User } from "@/types";
import axios, { type AxiosResponse } from "axios";

export abstract class GenericService<T> {
  public async getAll(): Promise<Awaited<T[]>> {
    const response: AxiosResponse = await axios.get(this.getUrl());
    const data = response.data.data;
    return data;
  }

  public async getOne(id: string): Promise<Awaited<T>> {
    const response: AxiosResponse = await axios.get(this.getUrl(), {
      params: { id },
    });
    return response.data;
  }

  public async create(entity: T): Promise<void> {
    await axios.put(this.getUrl(), entity);
  }

  public async update(entity: T): Promise<void> {
    await axios.patch(this.getUrl(), entity);
  }

  public async delete(id: string): Promise<void> {
    await axios.delete(this.getUrl(), { params: { id } });
  }

  protected abstract getUrl(): string;
}

export class UserService extends GenericService<User> {
  constructor(protected url: string) {
    super();
    this.url = url;
  }
  protected getUrl() {
    return this.url;
  }
}

const userService = new UserService(`${import.meta.env.PUBLIC_API_URL}/user`);
export default userService;
