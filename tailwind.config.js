export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      colors: {
        academy: {
          50: "#f4f9ff",
          100: "#e8f3ff",
          700: "#0f3f73",
          800: "#0a2c55",
          900: "#081d3c"
        },
        accent: {
          sky: "#0d9af2",
          teal: "#0f9d83"
        }
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Manrope", "sans-serif"]
      },
      boxShadow: {
        premium: "0 30px 60px rgba(8, 29, 60, 0.18)",
        card: "0 16px 35px rgba(11, 31, 59, 0.12)"
      }
    }
  },
  plugins: []
};
