module.exports = {
  env: {
    browser: true,
    es2023: true
  },
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off"
  },
  extends: ["airbnb", "prettier"],
};