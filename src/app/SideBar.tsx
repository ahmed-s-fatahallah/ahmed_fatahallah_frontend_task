import CypartaIcon from "@/assets/images/cypartal_logo.svg";
import DashboardIcon from "@/assets/images/akar-icons_dashboard.svg";
import CarbonTaskIcon from "@/assets/images/carbon_task.svg";
import EmployeesIcon from "@/assets/images/clarity_employee-group-line.svg";
import CoinDollarIcon from "@/assets/images/coin-dollar.svg";
import WalletIcon from "@/assets/images/icon _wallet.svg";
import FilesIcon from "@/assets/images/file 01.svg";
import UserIcon from "@/assets/images/combo shape.svg";
import CalenderIcon from "@/assets/images/calendar-check.svg";
import Link from "next/link";

export default function SideBar() {
  return (
    <aside className="py-10 px-7 min-h-dvh">
      <section className="max-w-[329px] border-[1px] border-dark-gray-3 rounded-[40px] drop-shadow-sm min-h-full">
        <header>
          <CypartaIcon className="scale-75 mx-auto mt-5 mb-11" />
        </header>
        <ul className="ms-20">
          <li className="mb-12">
            <Link href="#" className="flex gap-5">
              <DashboardIcon />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="mb-12">
            <button type="button" className="flex gap-5 mb-9">
              <EmployeesIcon />
              <span>Employees</span>
            </button>
            <ul className="ms-12">
              <li>
                <Link href="#" className="flex gap-[10px] mb-5">
                  <UserIcon />
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex gap-[10px] mb-5">
                  <CalenderIcon />
                  <span>Attendance</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex gap-[10px] mb-5">
                  <FilesIcon />
                  <span>Tasks</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="mb-12">
            <Link href="#" className="flex gap-5">
              <CoinDollarIcon />
              <span>Payroll</span>
            </Link>
          </li>
          <li className="mb-12">
            <button type="button" className="flex gap-5">
              <CarbonTaskIcon />
              <span>Holidays</span>
            </button>
          </li>
          <li>
            <Link href="#" className="flex gap-5">
              <WalletIcon />
              <span>Advanced Payment</span>
            </Link>
          </li>
        </ul>
      </section>
    </aside>
  );
}
