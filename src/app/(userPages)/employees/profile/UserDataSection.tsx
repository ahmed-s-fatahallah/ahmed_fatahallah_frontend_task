"use client";
import Button from "@/Components/Button";
import InputField from "@/Components/InputField";
import ProfileDataField from "@/Components/ProfileDataField";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function UserDataSection({
  firstName,
  lastName,
  phone,
  email,
}: {
  firstName: string;
  lastName: string;
  phone: number | string;
  email: string;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const isEditing = searchParams.has("edit");
  const editingStyles =
    " border-solid border-light-red-2 border-b-2 pointer-events-auto";

  return (
    <form className="pe-[6px] grid grid-cols-2 gap-5" noValidate>
      <InputField
        aria-disabled={!isEditing}
        variant="profile"
        type="text"
        name="firstName"
        defaultValue={firstName}
        wrapperClassName={isEditing ? editingStyles : "pointer-events-none"}
        inputClassName=""
        key={isEditing.toString()}
        onKeyDown={(ev) => {
          if (!isEditing && ev.key !== "Tab") ev.preventDefault();
        }}
        autoFocus={isEditing}
      >
        First Name
      </InputField>
      <InputField
        aria-disabled={!isEditing}
        variant="profile"
        type="text"
        name="lastName"
        defaultValue={lastName}
        wrapperClassName={isEditing ? editingStyles : "pointer-events-none"}
        inputClassName=""
        onKeyDown={(ev) => {
          if (!isEditing && ev.key !== "Tab") ev.preventDefault();
        }}
      >
        Last Name
      </InputField>
      <InputField
        aria-disabled={!isEditing}
        variant="profile"
        type="tel"
        name="mobileNumber"
        defaultValue={phone}
        wrapperClassName={isEditing ? editingStyles : "pointer-events-none"}
        inputClassName=""
        onKeyDown={(ev) => {
          if (!isEditing && ev.key !== "Tab") ev.preventDefault();
        }}
      >
        Mobile Number
      </InputField>
      <InputField
        aria-disabled={!isEditing}
        variant="profile"
        type="email"
        name="email"
        defaultValue={email}
        wrapperClassName={isEditing ? editingStyles : "pointer-events-none"}
        inputClassName=""
        onKeyDown={(ev) => {
          if (!isEditing && ev.key !== "Tab") ev.preventDefault();
        }}
      >
        Email Address
      </InputField>
      <ProfileDataField title="Date of Birth" value="July 14, 1995" />
      <ProfileDataField title="Marital Status" value="Single" />
      <ProfileDataField title="Gender" value="Female" />
      <ProfileDataField title="Nationality" value="Egypt" />
      <ProfileDataField title="Address" value="Maadi" />
      <ProfileDataField title="City" value="Cairo" />
      <ProfileDataField title="State" value="Cairo" />
      <ProfileDataField title="Zip Code" value="35624" />
      <ProfileDataField title="Work's hours" value="180 hour" />
      <div className="border-dark-gray-4 border-b-[1px] flex justify-between">
        <ProfileDataField title="Salary/hour" value="300 EGP" />
        <ProfileDataField
          title="Total Salary"
          value="54000 EGP"
          className="text-light-red-2"
        />
      </div>
      <div>
        <Button type="submit">Submit</Button>
        <Button
          type="reset"
          onClick={() => {
            router.replace(pathname);
          }}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
