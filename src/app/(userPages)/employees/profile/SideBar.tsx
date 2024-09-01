"use client";

import DashboardIcon from "@/assets/images/akar-icons_dashboard.svg";
import CalenderIcon from "@/assets/images/calendar-check.svg";
import CarbonTaskIcon from "@/assets/images/carbon_task.svg";
import EmployeesIcon from "@/assets/images/clarity_employee-group-line.svg";
import CoinDollarIcon from "@/assets/images/coin-dollar.svg";
import CypartaIcon from "@/assets/images/cypartal_logo.svg";
import FilesIcon from "@/assets/images/file 01.svg";
import WalletIcon from "@/assets/images/icon _wallet.svg";
import UserIcon from "@/assets/images/user.svg";
import ChevronIcon from "@/assets/images/Vector.svg";
import Button from "@/Components/Button";
import StyledLink from "@/Components/StyledLink";
import { isActive } from "@/Utils/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function SideBar() {
  const [selectedTab, setSelectedTab] = useState("employee");

  const pathname = usePathname();

  useEffect(() => {
    if (!pathname.match(/employees|holidays/)) setSelectedTab("");
  }, [pathname]);

  const activeLinkBgStyles = (route: string) =>
    isActive(pathname, route)
      ? "rounded-r-full bg-light-red-1 text-light-red-2"
      : "";

  return (
    <aside className="py-10 px-7 min-h-dvh mt-[-94px]">
      <section className="w-[329px] border-[1px] border-dark-gray-3 rounded-[40px] drop-shadow-sm min-h-full">
        <header>
          <Link href="/">
            <CypartaIcon className="scale-75 mx-auto mt-5 mb-11" />
          </Link>
        </header>
        <ul>
          <li className="mb-10">
            <StyledLink
              variant="main-sidebar"
              href="/dashboard"
              className={`ps-20 py-[14px] pe-[30px] ${activeLinkBgStyles(
                "/dashboard"
              )}`}
            >
              <DashboardIcon
                className={
                  isActive(pathname, "/dashboard")
                    ? "stroke-light-red-2"
                    : "stroke-dark-gray-1"
                }
              />
              <span>Dashboard</span>
            </StyledLink>
          </li>
          <li className="mb-10">
            <Button
              variant="sidebar"
              type="button"
              className={`py-[10px] pe-[30px] ps-20 ${activeLinkBgStyles(
                "/employees"
              )}`}
              onClick={() => {
                if (selectedTab === "employee") {
                  setSelectedTab("");
                } else {
                  setSelectedTab("employee");
                }
              }}
            >
              <EmployeesIcon
                className={
                  isActive(pathname, "employees")
                    ? "fill-light-red-2"
                    : "fill-dark-gray-1"
                }
              />
              <span>Employees</span>
              <ChevronIcon
                className={`ms-auto transition-all ${
                  selectedTab === "employee" ? "rotate-90" : ""
                } ${
                  isActive(pathname, "employees")
                    ? "stroke-light-red-2"
                    : "stroke-dark-gray-1"
                }`}
              />
            </Button>
            <div
              className={`grid transition-all ms-[130px] ${
                selectedTab === "employee"
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
              }`}
            >
              <ul className="overflow-hidden">
                <li
                  className={`mt-7 ${
                    isActive(pathname, "profile") ? "text-light-gray-1" : ""
                  }`}
                >
                  <StyledLink variant="sub-sidebar" href="/employees/profile">
                    <UserIcon
                      className={
                        isActive(pathname, "profile")
                          ? "stroke-light-gray-1"
                          : "stroke-dark-blue-1"
                      }
                    />
                    <span>Profile</span>
                  </StyledLink>
                </li>
                <li
                  className={
                    isActive(pathname, "/employees/attendance")
                      ? "text-light-gray-1"
                      : ""
                  }
                >
                  <StyledLink
                    variant="sub-sidebar"
                    href="/employees/attendance"
                  >
                    <CalenderIcon
                      className={
                        isActive(pathname, "/employees/attendance")
                          ? "stroke-light-gray-1"
                          : "stroke-dark-blue-1"
                      }
                    />
                    <span>Attendance</span>
                  </StyledLink>
                </li>
                <li
                  className={
                    isActive(pathname, "/employees/tasks")
                      ? "text-light-gray-1"
                      : ""
                  }
                >
                  <StyledLink variant="sub-sidebar" href="/employees/tasks">
                    <FilesIcon
                      className={
                        isActive(pathname, "/employees/tasks")
                          ? "stroke-light-gray-1"
                          : "stroke-dark-blue-1"
                      }
                    />
                    <span>Tasks</span>
                  </StyledLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-10">
            <StyledLink
              variant="main-sidebar"
              href="/payroll"
              className={`py-[14px] ps-20 ${activeLinkBgStyles("/payroll")}`}
            >
              <CoinDollarIcon
                className={
                  isActive(pathname, "/payroll")
                    ? "stroke-light-red-2"
                    : "stroke-dark-gray-1"
                }
              />
              <span>Payroll</span>
            </StyledLink>
          </li>
          <li className="mb-10">
            <Button
              variant="sidebar"
              type="button"
              onClick={() => {
                if (selectedTab === "holidays") {
                  setSelectedTab("");
                } else {
                  setSelectedTab("holidays");
                }
              }}
              className={`py-[14px] pe-[30px] ps-20 ${activeLinkBgStyles(
                "/holidays"
              )}`}
            >
              <CarbonTaskIcon
                className={
                  isActive(pathname, "/holidays")
                    ? "fill-light-red-2"
                    : "fill-dark-gray-1"
                }
              />
              <span>Holidays</span>
              <ChevronIcon
                className={`ms-auto transition-all ${
                  selectedTab === "holidays" ? "rotate-90" : ""
                } ${
                  isActive(pathname, "holidays")
                    ? "stroke-light-red-2"
                    : "stroke-dark-gray-1"
                }`}
              />
            </Button>
            <div
              className={`grid transition-all ms-[130px] ${
                selectedTab === "holidays"
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
              }`}
            >
              <ul className="overflow-hidden">
                <li
                  className={`mt-7 ${
                    isActive(pathname, "holidays") ? "text-light-gray-1" : ""
                  }`}
                >
                  <StyledLink variant="sub-sidebar" href="/holidays/holyday">
                    <CarbonTaskIcon
                      className={
                        isActive(pathname, "holidays")
                          ? "fill-light-gray-1"
                          : "fill-dark-blue-1"
                      }
                    />
                    <span>Holyday 1</span>
                  </StyledLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <StyledLink
              variant="main-sidebar"
              href="/advanced_payment"
              className={`py-[14px] ps-20 ${activeLinkBgStyles(
                "/advanced_payment"
              )}`}
            >
              <WalletIcon
                className={
                  isActive(pathname, "/advanced_payment")
                    ? "stroke-light-red-2"
                    : "stroke-dark-gray-1"
                }
              />
              <span>Advanced Payment</span>
            </StyledLink>
          </li>
        </ul>
      </section>
    </aside>
  );
}
