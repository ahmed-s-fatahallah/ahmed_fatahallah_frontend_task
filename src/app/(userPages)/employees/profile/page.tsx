import { getUserInfo } from "@/actions";
import ChevronIcon from "@/assets/images/Vector.svg";
import StyledLink from "@/Components/StyledLink";
import { inter } from "@/Utils/fonts";
import TabsContainer from "./TabsContainer";
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
        <TabsContainer />
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
