import { v4 as uuidv4 } from "uuid";
import type { News } from "@/types";

export class NewNewsDetail implements News {
  id: string = uuidv4();
  news_picture = "";
  title = "";
  content = "";
  creation_date = new Date();
  category = [];
  type = "";
  published = true;
}
