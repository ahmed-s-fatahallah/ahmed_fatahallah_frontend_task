import Button from "@/Components/Button";
import CaseIcon from "@/assets/images/briefcase 04.svg";
import DocIcon from "@/assets/images/document-text.svg";
import LockIcon from "@/assets/images/lock.svg";
import UserIcon from "@/assets/images/user.svg";

/**
 * A container component for rendering a set of navigation tabs.
 *
 * @return {JSX.Element} A JSX element representing the tabs container.
 */
export default function TabsContainer() {
  return (
    <nav className="pb-[9px] mb-[21px] flex gap-5 border-b-dark-gray-3 border-b-[1px] font-light pe-[6px] max-lg:overflow-x-auto">
      <Button
        variant="tab"
        className="text-light-red-2 font-semibold relative after:absolute after:w-full after:h-1 after:bg-light-red-2 after:-bottom-[11px]"
      >
        <UserIcon className="fill-light-red-2" />
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
    </nav>
  );
}
