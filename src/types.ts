export type UserInfo = {
  id: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: number | string;
  bio?: string;
  is_superuser: boolean;
  is_staff: boolean;
  image: string;
  cover: string;
  message: string;
  status: number;
};
