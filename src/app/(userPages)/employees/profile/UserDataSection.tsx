"use client";
import InputField from "@/Components/InputField";
import ProfileDataField from "@/Components/ProfileDataField";
import { useSearchParams } from "next/navigation";

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
  const isEditing = searchParams.get("edit");
  const editingStyles = " border-solid border-black";

  return (
    <form className="pe-[6px] grid grid-cols-2 gap-5">
      <InputField
        disabled={!isEditing}
        variant="profile"
        type="text"
        name="firstName"
        defaultValue={firstName}
        wrapperClassName={isEditing ? editingStyles : ""}
        autoFocus={!!isEditing}
      >
        First Name
      </InputField>
      <InputField
        disabled={!isEditing}
        variant="profile"
        type="text"
        name="lastName"
        defaultValue={lastName}
        wrapperClassName={isEditing ? editingStyles : ""}
      >
        Last Name
      </InputField>
      <InputField
        disabled={!isEditing}
        variant="profile"
        type="tel"
        name="mobileNumber"
        defaultValue={phone}
        wrapperClassName={isEditing ? editingStyles : ""}
      >
        Mobile Number
      </InputField>
      <InputField
        disabled={!isEditing}
        variant="profile"
        type="email"
        name="email"
        defaultValue={email}
        wrapperClassName={isEditing ? editingStyles : ""}
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
    </form>
  );
}
