import { UserBaseData } from "@/types";

/**
 * Checks if the given pathName includes the specified routeName to determine if the route is active or not.
 *
 * @param {string} pathName - The path to check.
 * @param {string} routeName - The route to look for in the path.
 * @return {boolean} True if pathName includes routeName, false otherwise.
 */
export const isActive = (pathName: string, routeName: string) =>
  pathName.includes(routeName);

/**
 * Returns a partial object containing only the fields that have changed between the previous state and the new form data.
 *
 * @param {UserBaseData} prevState - The previous state of the user data.
 * @param {Record<keyof T, string>} formData - The new form data containing the updated user information.
 * @return {Partial<T>} A partial object containing only the fields that have changed.
 */
export function getChangedInputField<T extends UserBaseData>(
  prevState: UserBaseData,
  formData: Record<keyof T, string>
): Partial<T> {
  const modifiedBody: Partial<T> = {};

  Object.keys(prevState).forEach((key) => {
    const typedKey = key as keyof T extends keyof UserBaseData
      ? keyof T
      : never;

    if (
      prevState[typedKey] &&
      formData[typedKey] &&
      prevState[typedKey] != formData[typedKey]
    ) {
      modifiedBody[typedKey] = formData[typedKey];
    }
  });
  return modifiedBody;
}
