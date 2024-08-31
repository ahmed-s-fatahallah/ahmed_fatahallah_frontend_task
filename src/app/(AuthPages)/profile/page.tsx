import { inter } from "@/Utils/fonts";
import Image from "next/image";
import Link from "next/link";
import EditIcon from "@/assets/images/edit.svg";
import CaseIcon from "@/assets/images/briefcase 04.svg";
import EnvlopeIcon from "@/assets/images/gmail.svg";
import LockIcon from "@/assets/images/lock.svg";
import DocIcon from "@/assets/images/document-text.svg";
import UserIcon from "@/assets/images/user.svg";

export default function Profile() {
  return (
    <section className="mt-[38px] flex-1 pe-[60px]">
      <section className="px-[26px]">
        <div
          className={`${inter.className} flex gap-[14.3px] items-center mb-[30px] font-semibold`}
        >
          <Link href="#">Employees</Link>
          <span className="chevron right"></span>
          <Link href="#">Profile</Link>
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
          <button className="px-5 py-[13px] me-[86px] col-start-3 col-span-1 row-start-2 -row-end-1 bg-dark-gray-1 rounded-[10px] place-self-end text-white font-light flex items-center gap-[10px]">
            <EditIcon />
            <span>Edit Profile</span>
          </button>
        </div>
      </section>
      <section className="w-fit mt-6">
        <div className="pb-[9px] mb-[21px] flex gap-5 border-b-dark-gray-3 border-b-[1px] font-light pe-[6px]">
          <button className="flex gap-[10px]">
            <UserIcon />
            <span>Personal Information</span>
          </button>
          <button className="flex gap-[10px]">
            <CaseIcon />
            <span>Professional Information</span>
          </button>
          <button className="flex gap-[10px]">
            <DocIcon />
            <span>Documents</span>
          </button>
          <button className="flex gap-[10px]">
            <LockIcon />
            <span>Account Access</span>
          </button>
        </div>
        <form className="pe-[6px] grid grid-cols-2 gap-5">
          <div className="border-dark-gray-4 border-b-[1px]">
            <label
              htmlFor="firstName"
              className="mb-1 text-sm leading-[22px] text-[#A2A1A8] font-light"
            >
              First Name
            </label>
            <input
              className="font-light text-[#16151C] mb-[10px]"
              type="text"
              id="firstName"
              name="firstName"
              value="Mariam"
            />
          </div>
          <div className="border-dark-gray-4 border-b-[1px]">
            <label
              htmlFor="lastName"
              className="mb-1 text-sm leading-[22px] text-[#A2A1A8] font-light"
            >
              Last Name
            </label>
            <input
              className="font-light text-[#16151C] mb-[10px]"
              type="text"
              id="lastName"
              name="lastName"
              value="Aly"
            />
          </div>
          <div className="border-dark-gray-4 border-b-[1px]">
            <label
              htmlFor="mobileNumber"
              className="mb-1 text-sm leading-[22px] text-[#A2A1A8] font-light"
            >
              Mobile Number
            </label>
            <input
              className="font-light text-[#16151C] mb-[10px]"
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value="010567240256"
            />
          </div>
          <div className="border-dark-gray-4 border-b-[1px]">
            <label
              htmlFor="email"
              className="mb-1 text-sm leading-[22px] text-[#A2A1A8] font-light"
            >
              Email Address
            </label>
            <input
              className="font-light text-[#16151C] mb-[10px]"
              type="email"
              id="email"
              name="email"
              value="mariam@gmail.com "
            />
          </div>
          <div className="border-dark-gray-4 border-b-[1px]">
            <label
              htmlFor="birth"
              className="mb-1 text-sm leading-[22px] text-[#A2A1A8] font-light"
            >
              Date of Birth
            </label>
            <input
              className="font-light text-[#16151C] mb-[10px]"
              type="text"
              id="birth"
              name="birth"
              value="July 14, 1995"
            />
          </div>
          <div className="border-dark-gray-4 border-b-[1px]">
            <label
              htmlFor="marital"
              className="mb-1 text-sm leading-[22px] text-[#A2A1A8] font-light"
            >
              Marital Status
            </label>
            <input
              className="font-light text-[#16151C] mb-[10px]"
              type="text"
              id="marital"
              name="marital"
              value="Single"
            />
          </div>
          <div className="border-dark-gray-4 border-b-[1px]">
            <label
              htmlFor="gender"
              className="mb-1 text-sm leading-[22px] text-[#A2A1A8] font-light"
            >
              Gender
            </label>
            <input
              className="font-light text-[#16151C] mb-[10px]"
              type="text"
              id="gender"
              name="gender"
              value="Female"
            />
          </div>
          <div className="border-dark-gray-4 border-b-[1px]">
            <label
              htmlFor="nationality"
              className="mb-1 text-sm leading-[22px] text-[#A2A1A8] font-light"
            >
              Nationality
            </label>
            <input
              className="font-light text-[#16151C] mb-[10px]"
              type="text"
              id="nationality"
              name="nationality"
              value="Egypt"
            />
          </div>
          <div className="border-dark-gray-4 border-b-[1px]">
            <label
              htmlFor="address"
              className="mb-1 text-sm leading-[22px] text-[#A2A1A8] font-light"
            >
              Address
            </label>
            <input
              className="font-light text-[#16151C] mb-[10px]"
              type="text"
              id="address"
              name="address"
              value="Maadi"
            />
          </div>
          <div className="border-dark-gray-4 border-b-[1px]">
            <label
              htmlFor="city"
              className="mb-1 text-sm leading-[22px] text-[#A2A1A8] font-light"
            >
              City
            </label>
            <input
              className="font-light text-[#16151C] mb-[10px]"
              type="text"
              id="city"
              name="city"
              value="Cairo"
            />
          </div>
          <div className="border-dark-gray-4 border-b-[1px]">
            <label
              htmlFor="state"
              className="mb-1 text-sm leading-[22px] text-[#A2A1A8] font-light"
            >
              State
            </label>
            <input
              className="font-light text-[#16151C] mb-[10px]"
              type="text"
              id="state"
              name="state"
              value="Cairo"
            />
          </div>
          <div className="border-dark-gray-4 border-b-[1px]">
            <label
              htmlFor="code"
              className="mb-1 text-sm leading-[22px] text-[#A2A1A8] font-light"
            >
              Zip Code
            </label>
            <input
              className="font-light text-[#16151C] mb-[10px]"
              type="text"
              id="code"
              name="code"
              value="35624"
            />
          </div>
          <div className="border-dark-gray-4 border-b-[1px]">
            <label
              htmlFor="hours"
              className="mb-1 text-sm leading-[22px] text-[#A2A1A8] font-light"
            >
              Work’s hours
            </label>
            <input
              className="font-light text-[#16151C] mb-[10px]"
              type="text"
              id="hours"
              name="hours"
              value="180 hour"
            />
          </div>
          <div className="border-dark-gray-4 border-b-[1px] flex">
            <div>
              <label
                htmlFor="hourSalary"
                className="mb-1 text-sm leading-[22px] text-[#A2A1A8] font-light"
              >
                Salary/hour
              </label>
              <input
                className="font-light text-[#16151C] mb-[10px]"
                type="text"
                id="hourSalary"
                name="hourSalary"
                value="300 EGP"
              />
            </div>
            <div>
              <label
                htmlFor="totalSalary"
                className="mb-1 text-sm leading-[22px] text-[#A2A1A8] font-light"
              >
                Total Salary
              </label>
              <input
                className="font-light text-[#16151C] mb-[10px]"
                type="text"
                id="totalSalary"
                name="totalSalary"
                value="54000 EGP"
              />
            </div>
          </div>
        </form>
      </section>
    </section>
  );
}
