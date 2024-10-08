import { getUserInfo } from "@/actions";
import ChevronIcon from "@/assets/images/Vector.svg";
import StyledLink from "@/Components/StyledLink";
import { inter } from "@/Utils/fonts";
import TabsContainer from "./TabsContainer";
import UserDataSection from "./UserDataSection";
import UserDataTopSection from "./UserDataTopSection";

export async function generateMetadata() {
  const userInfo = await getUserInfo();

  return {
    title: `${userInfo?.first_name} ${userInfo?.last_name}`,
  };
}

/**
 * A the profile page component. Handles the user's profile page functionality.
 *
 * @return {JSX.Element} The JSX element representing the user's profile page.
 */
export default async function Profile() {
  try {
    const userInfo = await getUserInfo();

    return (
      <section
        id="profileWrapper"
        className="mt-[38px] flex-1 max-[1220px]:px-[60px] max-lg:px-[20px] max-[600px]:max-w-full"
      >
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
        <section className="w-fit mt-6 max-[600px]:w-auto">
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
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
}
