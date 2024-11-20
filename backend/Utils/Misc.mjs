export const cookiesOptions = {
  commonOptions: {
    httpOnly: true,
    signed: true,
    secure: process.env.BASE_URL_FRONT_END.includes("localhost") ? false : true,
    sameSite: process.env.BASE_URL_FRONT_END.includes("localhost")
      ? true
      : "none",
    domain: process.env.BASE_URL_FRONT_END.includes("localhost")
      ? "localhost"
      : "www.mahamayacomputers.com",
    path: "/",
  },
};

cookiesOptions.login = {
  ...cookiesOptions.commonOptions,
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
};

cookiesOptions.logout = {
  ...cookiesOptions.commonOptions,
  maxAge: 0,
};
