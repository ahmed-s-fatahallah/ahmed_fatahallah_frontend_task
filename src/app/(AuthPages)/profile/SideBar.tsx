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

export default function SideBar() {
  return (
    <aside className="py-10 px-7 min-h-dvh mt-[-94px]">
      <section className="w-[329px] border-[1px] border-dark-gray-3 rounded-[40px] drop-shadow-sm min-h-full">
        <header>
          <CypartaIcon className="scale-75 mx-auto mt-5 mb-11" />
        </header>
        <ul className="ms-20">
          <li className="mb-12 pe-[30px]">
            <StyledLink variant="main-sidebar" href="#">
              <DashboardIcon />
              <span>Dashboard</span>
            </StyledLink>
          </li>
          <li className="mb-12 pe-[30px]">
            <Button variant="sidebar" type="button" className="mb-7">
              <EmployeesIcon />
              <span>Employees</span>
              <ChevronIcon className="rotate-90 ms-auto" />
            </Button>
            <ul className="ms-12">
              <li>
                <StyledLink variant="sub-sidebar" href="#">
                  <UserIcon />
                  <span>Profile</span>
                </StyledLink>
              </li>
              <li>
                <StyledLink variant="sub-sidebar" href="#">
                  <CalenderIcon />
                  <span>Attendance</span>
                </StyledLink>
              </li>
              <li>
                <StyledLink variant="sub-sidebar" href="#">
                  <FilesIcon />
                  <span>Tasks</span>
                </StyledLink>
              </li>
            </ul>
          </li>
          <li className="mb-12 pe-[30px]">
            <StyledLink variant="main-sidebar" href="#">
              <CoinDollarIcon />
              <span>Payroll</span>
            </StyledLink>
          </li>
          <li className="mb-12 pe-[30px]">
            <Button variant="sidebar" type="button">
              <CarbonTaskIcon />
              <span>Holidays</span>
              <ChevronIcon className="ms-auto" />
            </Button>
          </li>
          <li className="pe-[30px]">
            <StyledLink variant="main-sidebar" href="#">
              <WalletIcon />
              <span>Advanced Payment</span>
            </StyledLink>
          </li>
        </ul>
      </section>
    </aside>
  );
}
