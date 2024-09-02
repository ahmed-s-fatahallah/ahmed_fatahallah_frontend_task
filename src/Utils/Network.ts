// export the routes for the app

const BaseUrl = "https://cyparta-backend-gf7qm.ondigitalocean.app/api" as const;

export const routes = {
  login: `${BaseUrl}/login/`,
  profile: `${BaseUrl}/profile/`,
} as const;
