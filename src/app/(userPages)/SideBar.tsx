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
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * A functional component representing the application's sidebar.
 * It handles the state of the currently active menu and the side menu's open state.
 * It also renders the sidebar's content, including links to different routes.
 *
 * @return {JSX.Element} The JSX element representing the sidebar.
 */
export default function SideBar() {
  const [currentActiveMenu, setCurrentActiveMenu] = useState("employee");
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname.match(/employees|holidays/)) setCurrentActiveMenu("");
  }, [pathname]);

  useEffect(() => {
    if (searchParams.has("side_menu")) {
      setIsSideMenuOpen(true);
    } else {
      setIsSideMenuOpen(false);
    }
  }, [searchParams]);

  /**
   * Returns the CSS classes for activating the background styles of a link based on the route.
   *
   * @param {string} route - The route to check for activation.
   * @return {string} The CSS classes for the link's background styles.
   */
  const activateLinkBgStyles = (route: string) =>
    isActive(pathname, route)
      ? "bg-light-red-1 text-light-red-2 before:w-[5px] before:rounded-full before:h-full before:absolute before:bg-light-red-3 before:left-0"
      : "hover:bg-light-gray";

  return (
    <aside
      className={`py-10 px-7 min-h-dvh mt-[-94px] max-[1220px]:fixed max-[1220px]:bg-white max-[1220px]:px-0 max-[1220px]:min-h-0 max-[1220px]:bottom-0 ${
        !isSideMenuOpen ? "max-[1220px]:-translate-x-full" : ""
      } transition z-10`}
    >
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
              className={activateLinkBgStyles("/dashboard")}
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
              className={activateLinkBgStyles("/employees")}
              onClick={() => {
                if (currentActiveMenu === "employee") {
                  setCurrentActiveMenu("");
                } else {
                  setCurrentActiveMenu("employee");
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
                  currentActiveMenu === "employee" ? "rotate-90" : ""
                } ${
                  isActive(pathname, "employees")
                    ? "stroke-light-red-2"
                    : "stroke-dark-gray-1"
                }`}
              />
            </Button>
            <div
              className={`grid transition-all ms-[130px] ${
                currentActiveMenu === "employee"
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
              }`}
            >
              <ul className="overflow-hidden">
                <li
                  className={`mt-7 ${
                    isActive(pathname, "profile")
                      ? "text-light-gray-1"
                      : "hover:text-light-red-2"
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
                      : "hover:text-light-red-2"
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
                      : "hover:text-light-red-2"
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
              className={activateLinkBgStyles("/payroll")}
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
                if (currentActiveMenu === "holidays") {
                  setCurrentActiveMenu("");
                } else {
                  setCurrentActiveMenu("holidays");
                }
              }}
              className={activateLinkBgStyles("/holidays")}
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
                  currentActiveMenu === "holidays" ? "rotate-90" : ""
                } ${
                  isActive(pathname, "holidays")
                    ? "stroke-light-red-2"
                    : "stroke-dark-gray-1"
                }`}
              />
            </Button>
            <div
              className={`grid transition-all ms-[130px] ${
                currentActiveMenu === "holidays"
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
              }`}
            >
              <ul className="overflow-hidden">
                <li
                  className={`mt-7 ${
                    isActive(pathname, "holidays")
                      ? "text-light-gray-1"
                      : "hover:text-light-red-2"
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
              className={activateLinkBgStyles("/advanced_payment")}
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
