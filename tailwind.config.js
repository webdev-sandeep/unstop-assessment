/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: "140px minmax(0, 1fr)",
      },
    },
  },
  plugins: [],
};
