import { getUserInfo } from "@/actions";
import CaseIcon from "@/assets/images/briefcase 04.svg";
import DocIcon from "@/assets/images/document-text.svg";
import LockIcon from "@/assets/images/lock.svg";
import UserIcon from "@/assets/images/user.svg";
import ChevronIcon from "@/assets/images/Vector.svg";
import Button from "@/Components/Button";
import StyledLink from "@/Components/StyledLink";
import { inter } from "@/Utils/fonts";
import UserDataSection from "./UserDataSection";
import UserDataTopSection from "./UserDataTopSection";

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
          image={userInfo.image || ""}
          first_name={userInfo.first_name}
          last_name={userInfo.last_name}
          bio={userInfo.bio || "N/A"}
          email={userInfo.email || "N/A"}
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
          first_name={userInfo.first_name || "N/A"}
          last_name={userInfo.last_name || "N/A"}
          phone={userInfo.phone || "N/A"}
          email={userInfo.email || "N/A"}
          bio={userInfo.bio}
        />
      </section>
    </section>
  );
}
