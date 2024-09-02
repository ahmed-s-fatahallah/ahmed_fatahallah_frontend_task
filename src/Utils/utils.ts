/**
 * Checks if the given pathName includes the specified routeName to determine if the route is active or not.
 *
 * @param {string} pathName - The path to check.
 * @param {string} routeName - The route to look for in the path.
 * @return {boolean} True if pathName includes routeName, false otherwise.
 */
export const isActive = (pathName: string, routeName: string) =>
  pathName.includes(routeName);
