const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },
  defaultLocale: "fr",
  locales: ["fr"],
  keySeparator: ".",
  localePath: path.resolve("./public/locales"),
  debug: process.env.NODE_ENV !== "production",
};
