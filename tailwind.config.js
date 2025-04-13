export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",

  theme: {
    extend: {
      fontSize: {
        md: '16px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
