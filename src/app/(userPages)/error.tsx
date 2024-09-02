"use client";

/**
 * Nextjs error component. To handle any errors thrown in the application
 *
 * @return {JSX.Element} An error message component.
 */
export default function error() {
  return (
    <h1 className="text-light-red-2 font-bold flex items-center justify-center ">
      An Error Occurred While fetching user info please try again later
    </h1>
  );
}
