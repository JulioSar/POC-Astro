export interface User extends Entity {
  name: string;
  mail: string;
  status: boolean;
  profile_picture: string | undefined;
}

export interface News extends Entity {
  new_picture: string | undefined;
  title: string;
  content: string;
  creation_date: string;
  category: string;
  type: string;
  published: boolean;
}

export interface ApplicationsInfo extends Entity {
  application_name: string;
  application_image: string;
  application_summary: string;
  application_contact: string;
  application_contact_email: string;
  application_link: string[];
  active: boolean;
}

export interface PaginateProps<T extends typeof Entity> {
  data: {
    items: T[];
    totalCount: number;
  };
  pageSize: number;
  pageIndex?: number;
}

type Operator = "=" | "|" | "in" | "contains";

export interface Filter<T extends Entity> {
  property: keyof T;
  operator: Operator;
  value: string;
}

export interface Entity {
  id: string;
}

export interface Interest extends Entity {
  name: string;
  category: {
    name: string;
    parent: null | string;
  };
}
