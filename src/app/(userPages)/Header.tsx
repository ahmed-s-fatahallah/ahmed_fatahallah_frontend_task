import { getUserInfo } from "@/actions";
import NotificationIcon from "@/assets/images/notificationIcon.svg";
import Button from "@/Components/Button";
import UserMenu from "./UserMenu";

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
      <UserMenu imgSrc={userInfo.cover} />
    </header>
  );
}
