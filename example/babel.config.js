const path = require("path");
const pak = require("../package.json");

const packagesPath = path.join(__dirname, "..", "packages");

const alias = {
  "^@react-native-mono-template/(.+)": `${packagesPath}/\\1/src`,
};

module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            // For development, we want to alias the library to the source
            ...alias,
          },
        },
      ],
    ],
  };
};
