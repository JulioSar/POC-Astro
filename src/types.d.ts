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

export interface ApplicationsInfo {
  id: string;
  application_name: string;
  application_image: string;
  application_summary: string;
  application_contact: string;
  application_contact_email: string;
  application_link: string[];
}

export interface paginateProps {
  data: {
    totalCount: number;
    items: {
      id: string;
      mail: string;
      name: string;
      status: boolean;
    }[];
  };
  pageSize: number;
  pageIndex?: number;
}
