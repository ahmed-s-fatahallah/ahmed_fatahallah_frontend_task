import CaseIcon from "@/assets/images/briefcase 04.svg";
import DocIcon from "@/assets/images/document-text.svg";
import LockIcon from "@/assets/images/lock.svg";
import UserIcon from "@/assets/images/user.svg";
import ChevronIcon from "@/assets/images/Vector.svg";
import Button from "@/Components/Button";
import StyledLink from "@/Components/StyledLink";
import { inter } from "@/Utils/fonts";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import UserDataSection from "./UserDataSection";
import UserDataTopSection from "./UserDataTopSection";

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

const getUserInfo = async () => {
  const token = cookies().get("access");

  if (!token) redirect("/login", RedirectType.replace);

  try {
    const res = await fetch(
      "https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/",
      { method: "GET", headers: { Authorization: `Bearer ${token.value}` } }
    );

    if (!res.ok) throw new Error("failed to fetch user data");

    const data: UserInfo = await res.json();

    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
      redirect("/login", RedirectType.replace);
    }
  }
};

export default async function Profile() {
  const userInfo = await getUserInfo();

  return (
    <section className="mt-[38px] flex-1 pe-[60px]">
      <section className="px-3">
        <div
          className={`${inter.className} flex gap-[14.3px] items-center mb-[30px] font-semibold`}
        >
          <StyledLink href="#">Employees</StyledLink>
          <ChevronIcon className="stroke-dark-gray-1" />
          <StyledLink href="#">Profile</StyledLink>
        </div>
        <UserDataTopSection
          cover={userInfo?.cover || ""}
          firstName={userInfo?.first_name}
          lastName={userInfo?.last_name}
          bio={userInfo?.bio || "N/A"}
          email={userInfo?.email || "N/A"}
        />
      </section>
      <section className="w-fit mt-6">
        <div className="pb-[9px] mb-[21px] flex gap-5 border-b-dark-gray-3 border-b-[1px] font-light pe-[6px]">
          <Button
            variant="tab"
            className="text-light-red-2 font-semibold relative after:absolute after:w-full after:h-1 after:bg-light-red-2 after:-bottom-[11px]"
          >
            <UserIcon className="fill-light-red-2" />
            <span>Personal Information</span>
          </Button>
          <Button variant="tab">
            <CaseIcon />
            <span>Professional Information</span>
          </Button>
          <Button variant="tab">
            <DocIcon />
            <span>Documents</span>
          </Button>
          <Button variant="tab">
            <LockIcon />
            <span>Account Access</span>
          </Button>
        </div>
        <UserDataSection
          firstName={userInfo?.first_name || "N/A"}
          lastName={userInfo?.last_name || "N/A"}
          phone={userInfo?.phone || "N/A"}
          email={userInfo?.email || "N/A"}
        />
      </section>
    </section>
  );
}
