import NotificationIcon from "@/assets/images/notification.svg";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-end gap-9 px-24 pt-[34px]">
      <button
        type="button"
        className="w-[50px] h-[50px] flex items-center justify-center bg-[#a2a1a81a] rounded-[10px]"
      >
        <NotificationIcon />
      </button>
      <Image
        src=""
        alt="profile photo"
        width={60}
        height={60}
        className="rounded-full"
      />
    </header>
  );
}
