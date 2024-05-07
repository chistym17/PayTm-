/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
  },
  // Exclude specific files or patterns from linting
  ignorePatterns: ["app/SignIn/loading.js"], // Adjust the path as needed
};
