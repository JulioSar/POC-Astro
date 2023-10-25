import { v4 as uuidv4 } from "uuid";
import type { User } from "../../../types";

export class NewUser implements User {
  id: string = uuidv4();
  name: string = "";
  mail: string = "";
  status: boolean = false;
  profile_picture: string = "";
}
