/** @type {import('tailwindcss').Config} */
const toasteoTailwindPath = require("./node_modules/@deegital/vue-trustup-io-toasteo/dist/index.js");

export default {
  content: ["./index.html", "./src/**/*.{ts,vue}", toasteoTailwindPath],
  theme: {
    extend: {},
  },
  plugins: [],
};
