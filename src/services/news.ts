import type { News } from "@/types";
import { GenericService } from "./users";

export class NewsService extends GenericService<News> {
  constructor(protected url: string) {
    super();
    this.url = url;
  }
}

const newsService = new NewsService(`${import.meta.env.PUBLIC_API_URL}/news`);
export default newsService;
