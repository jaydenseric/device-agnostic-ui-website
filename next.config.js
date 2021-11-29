module.exports = {
  env: {
    ORIGIN: process.env.ORIGIN || `https://${process.env.VERCEL_URL}`,
  },
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  reactStrictMode: true,
};
