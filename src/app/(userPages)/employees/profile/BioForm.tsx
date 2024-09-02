"use client";

import { editUser } from "@/actions";
import CaseIcon from "@/assets/images/briefcase 04.svg";
import EditIcon from "@/assets/images/edit.svg";
import Button from "@/Components/Button";
import InputField from "@/Components/InputField";
import { UserInfo } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

export default function BioForm({ bio }: Pick<UserInfo, "bio">) {
  const [bioInputValue, setBioInputValue] = useState(bio);
  const [isEditing, setIsEditing] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const editingStyles =
    "border-solid border-light-red-2 border-b-2 pointer-events-auto";

  const [state, editAction] = useFormState(editUser, { bio });

  useEffect(() => {
    if (searchParams.has("edit")) {
      setIsEditing(false);
    }
    if (state?.bio) setBioInputValue(state.bio);
  }, [state, searchParams]);

  return (
    <form
      action={editAction}
      className="col-start-2 col-span-1 row-start-2 flex justify-between items-center max-[600px]:col-start-1 max-[600px]:row-start-3"
      noValidate
      onSubmit={(ev) => {
        ev.currentTarget.requestSubmit();
        setIsEditing(false);
      }}
    >
      <InputField
        aria-disabled={!isEditing}
        type="text"
        name="bio"
        value={bioInputValue}
        wrapperClassName="font-light flex items-center gap-[10px]"
        key={isEditing.toString()}
        inputClassName={`outline-0 border-b-2 ${
          isEditing ? editingStyles : "pointer-events-none border-white"
        }`}
        onChange={(e) => {
          setBioInputValue(e.target.value);
        }}
        onKeyDown={(ev) => {
          if (!isEditing && ev.key !== "Tab") ev.preventDefault();
        }}
        errorMsg={
          state && "bio" in state && Array.isArray(state.bio)
            ? state.bio?.[0]
            : ""
        }
        autoFocus={isEditing}
      >
        <CaseIcon />
      </InputField>
      {!isEditing ? (
        <Button
          type="button"
          onClick={() => {
            setIsEditing(true);
            if (searchParams.has("edit")) {
              router.replace(pathname);
            }
          }}
        >
          <EditIcon className="fill-black" />
        </Button>
      ) : (
        <Button type="button" onClick={setIsEditing.bind(null, false)}>
          X
        </Button>
      )}
    </form>
  );
}
