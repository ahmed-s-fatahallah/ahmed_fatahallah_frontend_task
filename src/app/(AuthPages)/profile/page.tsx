import CaseIcon from "@/assets/images/briefcase 04.svg";
import DocIcon from "@/assets/images/document-text.svg";
import EditIcon from "@/assets/images/edit.svg";
import EnvlopeIcon from "@/assets/images/gmail.svg";
import LockIcon from "@/assets/images/lock.svg";
import UserIcon from "@/assets/images/user.svg";
import ChevronIcon from "@/assets/images/Vector.svg";
import Button from "@/Components/Button";
import InputField from "@/Components/InputField";
import StyledLink from "@/Components/StyledLink";
import { inter } from "@/Utils/fonts";
import Image from "next/image";

export default function Profile() {
  return (
    <section className="mt-[38px] flex-1 pe-[60px]">
      <section className="px-[26px]">
        <div
          className={`${inter.className} flex gap-[14.3px] items-center mb-[30px] font-semibold`}
        >
          <StyledLink href="#">Employees</StyledLink>
          <ChevronIcon />
          <StyledLink href="#">Profile</StyledLink>
        </div>
        <div className="grid grid-cols-[repeat(2,auto)_1fr] grid-rows-[repeat(3,auto)] pb-[30px] border-b-dark-gray-3 border-b-[1px] gap-x-4 place-items-start">
          <Image
            src=""
            alt=""
            width={100}
            height={100}
            className="col-start-1 col-span-1 row-span-full"
          />
          <h1 className="col-start-2 col-span-1 row-start-1 text-2xl leading-9 font-semibold">
            Mariam Aly
          </h1>
          <h2 className="col-start-2 col-span-1 row-start-2 font-light flex items-center gap-[10px]">
            <CaseIcon />
            <span>UX/UI DESIGNER</span>
          </h2>
          <h2 className="col-start-2 col-span-1 row-start-3 font-light flex items-center gap-[10px]">
            <EnvlopeIcon />
            <span>mariam@gmail.com</span>
          </h2>
          <Button
            variant="edit"
            className="col-start-3 col-span-1 row-start-2 -row-end-1 place-self-end"
          >
            <EditIcon />
            <span>Edit Profile</span>
          </Button>
        </div>
      </section>
      <section className="w-fit mt-6">
        <div className="pb-[9px] mb-[21px] flex gap-5 border-b-dark-gray-3 border-b-[1px] font-light pe-[6px]">
          <Button variant="tab">
            <UserIcon />
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
        <form className="pe-[6px] grid grid-cols-2 gap-5">
          <InputField
            variant="profile"
            type="text"
            name="firstName"
            defaultValue="Mariam"
          >
            First Name
          </InputField>
          <InputField
            variant="profile"
            type="text"
            name="lastName"
            defaultValue="Aly"
          >
            Last Name
          </InputField>
          <InputField
            variant="profile"
            type="tel"
            name="mobileNumber"
            defaultValue="010567240256"
          >
            Mobile Number
          </InputField>
          <InputField
            variant="profile"
            type="email"
            name="email"
            defaultValue="mariam@gmail.com"
          >
            Email Address
          </InputField>
          <InputField
            variant="profile"
            type="date"
            name="birth"
            defaultValue="July 14, 1995"
          >
            Date of Birth
          </InputField>
          <InputField
            variant="profile"
            type="text"
            name="status"
            defaultValue="Single"
          >
            Marital Status
          </InputField>
          <InputField
            variant="profile"
            type="text"
            name="gender"
            defaultValue="Female"
          >
            Gender
          </InputField>
          <InputField
            variant="profile"
            type="text"
            name="nationality"
            defaultValue="Egypt"
          >
            Nationality
          </InputField>
          <InputField
            variant="profile"
            type="text"
            name="address"
            defaultValue="Maadi"
          >
            Address
          </InputField>
          <InputField
            variant="profile"
            type="text"
            name="city"
            defaultValue="Cairo"
          >
            City
          </InputField>
          <InputField
            variant="profile"
            type="text"
            name="state"
            defaultValue="Cairo"
          >
            State
          </InputField>
          <InputField
            variant="profile"
            type="text"
            name="code"
            defaultValue="35624"
          >
            Zip Code
          </InputField>
          <InputField
            variant="profile"
            type="text"
            name="hours"
            defaultValue="180 hour"
          >
            Work&apos;s hours
          </InputField>
          <div className="border-dark-gray-4 border-b-[1px] flex">
            <InputField
              variant="profile"
              type="text"
              name="hourSalary"
              defaultValue="300 EGP"
            >
              Salary/hour
            </InputField>
            <InputField
              variant="profile"
              labelClassName="text-light-red-2"
              type="text"
              name="totalSalary"
              defaultValue="54000 EGP"
            >
              Total Salary
            </InputField>
          </div>
        </form>
      </section>
    </section>
  );
}
