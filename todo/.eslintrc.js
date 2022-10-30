module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "@vue/airbnb"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "space-before-function-paren": "off",
    "import/extensions": ["off"],
    quotes: ["off", "single"],
    "vuejs-accessibility/label-has-for": ["off"],
    "max-len": ["off"],
    "import/prefer-default-export": ["off"],
    "vue/valid-template-root": "off",
  },
};
