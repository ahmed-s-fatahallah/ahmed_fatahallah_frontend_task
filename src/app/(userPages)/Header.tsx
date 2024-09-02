import NotificationIcon from "@/assets/images/notificationIcon.svg";
import Button from "@/Components/Button";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import UserMenu from "./UserMenu";

type UserInfo = {
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

export const getUserInfo = async () => {
  const token = cookies().get("access");

  if (!token) redirect("/login", RedirectType.replace);

  const res = await fetch(
    "https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/",
    { method: "GET", headers: { Authorization: `Bearer ${token.value}` } }
  );

  if (!res.ok) throw new Error("failed to fetch user data");

  const data: UserInfo = await res.json();

  return data;
};

export default async function Header() {
  const userInfo = await getUserInfo();

  return (
    <header className="flex justify-end gap-9 px-24 pt-[34px]">
      <Button
        type="button"
        className="w-[50px] h-[50px] flex items-center justify-center bg-dark-gray-4 rounded-[10px]"
      >
        <NotificationIcon />
      </Button>
      <UserMenu imgSrc="" />
    </header>
  );
}
