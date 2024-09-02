export interface UserBaseData {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  bio?: string;
}

export interface UserInfo extends UserBaseData {
  id: number;
  image: string;
  name: string;
  is_superuser: boolean;
  is_staff: boolean;
  cover: string;
  message: string;
  status: number;
}
