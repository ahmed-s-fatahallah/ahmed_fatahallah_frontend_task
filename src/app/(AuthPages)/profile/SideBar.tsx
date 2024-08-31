import CypartaIcon from "@/assets/images/cypartal_logo.svg";
import DashboardIcon from "@/assets/images/akar-icons_dashboard.svg";
import CarbonTaskIcon from "@/assets/images/carbon_task.svg";
import EmployeesIcon from "@/assets/images/clarity_employee-group-line.svg";
import CoinDollarIcon from "@/assets/images/coin-dollar.svg";
import WalletIcon from "@/assets/images/icon _wallet.svg";
import FilesIcon from "@/assets/images/file 01.svg";
import UserIcon from "@/assets/images/user.svg";
import CalenderIcon from "@/assets/images/calendar-check.svg";
import Link from "next/link";

export default function SideBar() {
  return (
    <aside className="py-10 px-7 min-h-dvh mt-[-94px]">
      <section className="w-[329px] border-[1px] border-dark-gray-3 rounded-[40px] drop-shadow-sm min-h-full">
        <header>
          <CypartaIcon className="scale-75 mx-auto mt-5 mb-11" />
        </header>
        <ul className="ms-20">
          <li className="mb-12 pe-[30px]">
            <Link href="#" className="flex gap-5 items-center w-full">
              <DashboardIcon />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="mb-12 pe-[30px]">
            <button
              type="button"
              className="flex gap-5 mb-9 items-center w-full"
            >
              <EmployeesIcon />
              <span>Employees</span>
              <span className="chevron right ms-auto rotate-90"></span>
            </button>
            <ul className="ms-12">
              <li>
                <Link
                  href="#"
                  className="flex gap-[10px] mb-5 font-light items-center w-full"
                >
                  <UserIcon />
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex gap-[10px] mb-5 font-light items-center w-full"
                >
                  <CalenderIcon />
                  <span>Attendance</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex gap-[10px] mb-5 font-light items-center w-full"
                >
                  <FilesIcon />
                  <span>Tasks</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="mb-12 pe-[30px]">
            <Link href="#" className="flex gap-5 items-center w-full">
              <CoinDollarIcon />
              <span>Payroll</span>
            </Link>
          </li>
          <li className="mb-12 pe-[30px]">
            <button type="button" className="flex gap-5 items-center w-full">
              <CarbonTaskIcon />
              <span>Holidays</span>
              <span className="chevron right ms-auto"></span>
            </button>
          </li>
          <li className="pe-[30px]">
            <Link href="#" className="flex gap-5 items-center w-full">
              <WalletIcon />
              <span>Advanced Payment</span>
            </Link>
          </li>
        </ul>
      </section>
    </aside>
  );
}
