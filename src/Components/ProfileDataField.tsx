import { twMerge } from "tailwind-merge";

/**
 * A React component that displays a profile data field with a title and value.
 *
 * @param {string} title - The title of the profile data field.
 * @param {string} value - The value of the profile data field.
 * @param {string} [className] - Optional additional CSS class names for the title element.
 * @return {JSX.Element} The JSX element representing the profile data field.
 */
export default function ProfileDataField({
  title,
  value,
  className,
}: {
  title: string;
  value: string;
  className?: string;
}) {
  return (
    <div className="border-dark-gray-4 border-b-[1px]">
      <p
        className={twMerge(
          "mb-1 text-sm leading-[22px] text-dark-gray-5 font-light",
          className
        )}
      >
        {title}
      </p>
      <p className="font-light text-dark-blue-1 mb-[10px]">{value}</p>
    </div>
  );
}
