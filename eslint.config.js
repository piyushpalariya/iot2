import react from "eslint-plugin-react";
import reactNative from "eslint-plugin-react-native";
import jsxA11Y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ["**/coverage"],
  },
  ...compat.extends(
    "@react-native",
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
  ),
  {
    plugins: {
      react,
      "react-native": reactNative,
      "jsx-a11y": jsxA11Y,
      prettier,
    },

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
      // "no-console": 1, // Warning for console.log
    },
  },
  ...compat.extends("plugin:testing-library/react").map((config) => ({
    ...config,
    files: ["./__tests__/**/*.js"],
  })),
];
