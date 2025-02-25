module.exports = {
  extends: [
    "@react-native",
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  plugins: [
    "react",
    "react-native",
    "jsx-a11y",
    "@typescript-eslint",
    "prettier",
  ],
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/react-in-jsx-scope": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-deprecated": "warn",
    "react/prop-types": "warn",
    "react/jsx-no-duplicate-props": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "jsx-a11y/no-autofocus": "warn",
    "react-native/no-unused-styles": 2,
    "react-native/no-inline-styles": "error",
    "react-native/no-color-literals": "error",
    "react-native/no-raw-text": "error",
    "react-native/no-single-element-style-arrays": "error",
    //"no-console": 1, // Warning for console.log
  },
  overrides: [
    {
      // Test files only
      files: ["./__tests__/**/*.js"],
      extends: ["plugin:testing-library/react"],
    },
  ],
};
