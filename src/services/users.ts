import type { Entity, Filter, User } from "@/types";
import axios, { type AxiosResponse } from "axios";

export abstract class GenericService<T extends Entity> {
  protected abstract url: string;

  public async getAll(): Promise<T[]> {
    const response: AxiosResponse = await axios.get(this.url);
    const data = response.data.data;
    return data;
  }

  public async getOne(id: string): Promise<T> {
    const response: AxiosResponse = await axios.get(`${this.url}/${id}`, {
      params: { id },
    });
    return response.data.data;
  }

  public async getPage(index: number, size: number, filters?: Filter<T>[]) {
    const pageString = this.getIndexQuery(index, size);
    const filterString = this.parseFilters(filters ?? []);

    return await axios.get(
      `${this.url}?${pageString ?? ""}&${filterString ?? ""}`
    );
  }

  public async create(entity: T, id: string): Promise<void> {
    await axios.put(`${this.url}/${id}`, entity);
  }

  public async update(entity: T, id: string): Promise<void> {
    await axios.patch(`${this.url}/${id}`, entity);
  }

  public async delete(id: string): Promise<void> {
    await axios.delete(`${this.url}/${id}`, { params: { id } });
  }

  protected getIndexQuery(index: number, size: number): string {
    return `index=${index}&size=${size}`;
  }

  protected parseFilters(filters: Filter<T>[]): string {
    const query = "";
    filters.map((filter) => {
      query.concat(
        `${filter.property.toString()}:${filter.operator.toString()}:${
          filter.value
        }`
      );
    });

    return query;
  }
}

export class UserService extends GenericService<User> {
  constructor(protected url: string) {
    super();
    this.url = url;
  }
}

const userService = new UserService(`${import.meta.env.PUBLIC_API_URL}/user`);
export default userService;
