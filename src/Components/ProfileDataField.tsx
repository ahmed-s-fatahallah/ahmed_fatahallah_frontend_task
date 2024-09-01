import { twMerge } from "tailwind-merge";

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
