"use client";

import EditIcon from "@/assets/images/edit.svg";
import EnvlopeIcon from "@/assets/images/gmail.svg";
import Button from "@/Components/Button";
import type { UserBaseData, UserInfo } from "@/types";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import BioForm from "./BioForm";

/**
 * A React component that displays a user's top section profile data and has the bioForm Component.
 *
 * @param {UserBaseData & Pick<UserInfo, "image">} props - The component props.
 * @param {string} props.first_name - The user's first name.
 * @param {string} props.last_name - The user's last name.
 * @param {string} props.image - The user's profile image URL.
 * @param {string} props.bio - The user's bio.
 * @param {string} props.email - The user's email address.
 * @return {JSX.Element} The JSX element representing the user's top section profile data.
 */
export default function UserDataTopSection({
  first_name,
  last_name,
  image,
  bio,
  email,
}: UserBaseData & Pick<UserInfo, "image">) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <div
      className="grid grid-cols-[repeat(2,auto)_1fr] grid-rows-[repeat(3,auto)] pb-[30px] border-b-dark-gray-3 border-b-[1px] gap-x-4 place-items-start max-md:grid-cols-2 max-[600px]:grid-cols-1 
    max-[600px]:grid-rows-[repeat(6,auto)] max-[600px]:gap-3"
    >
      <Image
        src={image}
        alt="user photo"
        width={100}
        height={100}
        className="col-start-1 col-span-1 row-span-full rounded-[10px] max-md:justify-self-center max-[600px]:col-start-1 max-[600px]:row-span-1"
      />
      <h1 className="col-start-2 col-span-1 row-start-1 text-2xl leading-9 font-semibold max-[600px]:col-start-1 max-[600px]:row-start-2">
        {first_name || last_name ? `${first_name} ${last_name}` : "N/A"}
      </h1>
      <BioForm bio={bio} />
      <h2 className="col-start-2 col-span-1 row-start-3 font-light flex items-center gap-[10px] max-[600px]:col-start-1 max-[600px]:row-start-4">
        <EnvlopeIcon />
        <span>{email}</span>
      </h2>
      <Button
        variant="edit"
        type="button"
        disabled={searchParams.has("edit")}
        className="col-start-3 col-span-1 row-start-2 -row-end-1 place-self-end me-[86px] max-lg:me-0 max-md:col-start-2 max-md:-row-start-1 max-md:w-full max-md:justify-center max-md:mt-5 max-[600px]:col-start-1 
        max-[600px]:row-start-5 max-[600px]:mt-0"
        onClick={() => {
          if (searchParams.has("edit")) {
            router.push(`${pathname}`);
          } else {
            router.push(`${pathname}?edit=true`);
          }
        }}
      >
        <EditIcon />
        <span>Edit Profile</span>
      </Button>
    </div>
  );
}
