// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        shine: "shine 1.5s ease-in-out infinite",
      },
      keyframes: {
        shine: {
          "0%, 100%": { textShadow: "0 0 10px white" },
          "50%": { textShadow: "0 0 25px white" },
        },
      },
    },
  },
  plugins: [],
};


