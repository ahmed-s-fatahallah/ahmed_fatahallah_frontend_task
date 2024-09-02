"use client";
import { editUser } from "@/actions";
import Button from "@/Components/Button";
import InputField from "@/Components/InputField";
import ProfileDataField from "@/Components/ProfileDataField";
import { UserBaseData } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

/**
 * A form component for editing user data.
 *
 * @param {UserBaseData} first_name - The user's first name.
 * @param {UserBaseData} last_name - The user's last name.
 * @param {UserBaseData} phone - The user's phone number.
 * @param {UserBaseData} email - The user's email address.
 * @param {UserBaseData} bio - The user's bio information.
 * @return {JSX.Element} A JSX element representing the user data form.
 */
export default function UserDataSection({
  first_name,
  last_name,
  phone,
  email,
  bio,
}: UserBaseData) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [inputValues, setInputValues] = useState({
    firstName: first_name,
    lastName: last_name,
    email: email,
    phone: phone,
  });

  const initialState: any = {
    first_name,
    last_name,
    phone,
    email,
    bio,
  };

  const [state, editAction] = useFormState(editUser, initialState);

  useEffect(() => {
    setInputValues({
      firstName: state?.first_name,
      lastName: state?.last_name,
      email: state?.email,
      phone: state?.phone,
    });
  }, [state]);

  const isEditing = searchParams.has("edit");

  const editingStyles =
    "border-solid border-light-red-2 border-b-2 pointer-events-auto";

  return (
    <form
      className="pe-[6px] grid grid-cols-2 gap-5 max-[600px]:grid-cols-1"
      action={editAction}
      noValidate
    >
      {/* disabled attribute is not directly used because it is bad for accessibility because the screen readers will lose focus if the input is disabled and they can't target it anymore
      so we use the aria-disabled attribute and handle the disable behavior with js and css
       */}
      <InputField
        aria-disabled={!isEditing}
        variant="profile"
        type="text"
        name="firstName"
        value={inputValues.firstName}
        wrapperClassName={isEditing ? editingStyles : "pointer-events-none"}
        errorMsg={
          state && "first_name" in state && Array.isArray(state.first_name)
            ? state.first_name?.[0]
            : ""
        }
        // use the key prop to force the component to re-render when the isEditing state changes to gain focus
        key={isEditing.toString()}
        onChange={(e) => {
          setInputValues((prev) => ({
            ...prev,
            firstName: e.target.value,
          }));
        }}
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
        value={inputValues.lastName}
        wrapperClassName={isEditing ? editingStyles : "pointer-events-none"}
        errorMsg={
          state && "last_name" in state && Array.isArray(state.last_name)
            ? state.last_name?.[0]
            : ""
        }
        onChange={(e) => {
          setInputValues((prev) => ({
            ...prev,
            lastName: e.target.value,
          }));
        }}
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
        value={inputValues.phone}
        wrapperClassName={isEditing ? editingStyles : "pointer-events-none"}
        errorMsg={
          state && "phone" in state && Array.isArray(state.phone)
            ? state.phone?.[0]
            : ""
        }
        onChange={(e) => {
          setInputValues((prev) => ({ ...prev, phone: e.target.value }));
        }}
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
        value={inputValues.email}
        wrapperClassName={isEditing ? editingStyles : "pointer-events-none"}
        errorMsg={
          state && "email" in state && Array.isArray(state.email)
            ? state.email?.[0]
            : ""
        }
        onChange={(e) => {
          setInputValues((prev) => ({ ...prev, email: e.target.value }));
        }}
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
      {isEditing && (
        <div className="flex gap-5">
          <Button
            variant="edit"
            type="submit"
            onClick={() => {
              router.replace(pathname);
            }}
          >
            Submit
          </Button>
          <Button
            variant="cancel"
            type="reset"
            onClick={() => {
              router.replace(pathname);
            }}
          >
            Cancel
          </Button>
        </div>
      )}
    </form>
  );
}
