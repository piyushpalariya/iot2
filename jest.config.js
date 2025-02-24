/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  preset: "react-native",
  //preset: '@testing-library/react-native',
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  //setupFilesAfterEnv: ['./jest.setup.js'],
  transform: {"^.+\\.(js|jsx|ts|tsx)$": "babel-jest"},
  transformIgnorePatterns: ['/node_nodules/react-redux'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["json", "text", "lcov", "clover"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/navigation/**/*.{js,jsx,ts,tsx}",
    "src/locale/**/*.{js,jsx,ts,tsx}",
    "src/permissions/**/*.{js,jsx,ts,tsx}",
    "!src/Main.tsx",
    "!src/auth/Biometrics.tsx",
  ],
  globalSetup: undefined,
  globalTeardown: undefined,
  globals: {},
  testMatch: ["**/__tests__/**/**/*.test.js"],
  testPathIgnorePatterns: ["/__tests__/coverage"],
  testLocationInResults: true,
}

module.exports = config
