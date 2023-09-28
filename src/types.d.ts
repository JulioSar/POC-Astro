export interface User {
  id: string;
  name: string;
  mail: string;
  status: boolean;
  profile_picture: string | undefined;
}

export interface News {
  id: string;
  new_picture: string | undefined;
  title: string;
  content: string;
  date: string;
  category: string;
}
