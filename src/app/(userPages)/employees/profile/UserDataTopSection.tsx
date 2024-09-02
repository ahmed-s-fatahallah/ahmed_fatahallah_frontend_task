"use client";

import CaseIcon from "@/assets/images/briefcase 04.svg";
import EditIcon from "@/assets/images/edit.svg";
import EnvlopeIcon from "@/assets/images/gmail.svg";
import Button from "@/Components/Button";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function UserDataTopSection({
  firstName,
  lastName,
  cover,
  bio,
  email,
}: {
  cover: string;
  firstName: string | undefined;
  lastName: string | undefined;
  bio: string;
  email: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <div className="grid grid-cols-[repeat(2,auto)_1fr] grid-rows-[repeat(3,auto)] pb-[30px] border-b-dark-gray-3 border-b-[1px] gap-x-4 place-items-start">
      <Image
        src={cover}
        alt="user photo"
        width={100}
        height={100}
        className="col-start-1 col-span-1 row-span-full rounded-[10px]"
      />
      <h1 className="col-start-2 col-span-1 row-start-1 text-2xl leading-9 font-semibold">
        {firstName || lastName ? `${firstName} ${lastName}` : "N/A"}
      </h1>
      <h2 className="col-start-2 col-span-1 row-start-2 font-light flex items-center gap-[10px]">
        <CaseIcon />
        <span>{bio}</span>
      </h2>
      <h2 className="col-start-2 col-span-1 row-start-3 font-light flex items-center gap-[10px]">
        <EnvlopeIcon />
        <span>{email}</span>
      </h2>
      <Button
        variant="edit"
        disabled={searchParams.has("edit")}
        className="col-start-3 col-span-1 row-start-2 -row-end-1 place-self-end disabled:bg-dark-gray-5 hover:bg-dark-gray"
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
