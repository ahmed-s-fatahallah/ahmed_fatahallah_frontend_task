import { getUserInfo } from "@/actions";
import NotificationIcon from "@/assets/images/notificationIcon.svg";
import Button from "@/Components/Button";
import HamburgerBtn from "@/Components/HamburgerBtn";
import UserMenu from "./UserMenu";

/**
 * A React component that renders the application header with a hamburger button, notification icon, and user menu.
 *
 * @return {JSX.Element} The JSX element representing the application header.
 */
export default async function Header() {
  const userInfo = await getUserInfo();

  return (
    <header className="flex justify-end gap-9 px-24 pt-[34px] max-[600px]:px-3">
      <HamburgerBtn />
      <Button
        type="button"
        className="w-[50px] h-[50px] flex items-center justify-center bg-dark-gray-4 rounded-[10px]"
      >
        <NotificationIcon />
      </Button>
      <UserMenu imgSrc={userInfo.image} />
    </header>
  );
}
