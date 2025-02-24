module.exports = {
  extends: [
    "@react-native",
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    //"plugin:jsx-a11y/recommended",
  ],
  plugins: [
    "react",
    "react-native",
    //"jsx-a11y",
    "@typescript-eslint",
    "prettier",
  ],
  rules: {
    "react-native/no-unused-styles": 2, // Error if unused styles
    //"no-console": 1, // Warning for console.log
  },
  overrides: [
    {
      // Test files only
      files: ["./__tests__/**/*.js"],
      extends: ["plugin:testing-library/react"],
    },
  ],
}
