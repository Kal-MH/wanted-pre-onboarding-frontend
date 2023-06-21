module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["simple-import-sort"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "react/prop-types": "off",
    "@typescript-eslint/no-unused-vars": "off",
  },
};
