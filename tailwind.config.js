/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      backgroundImage: {
        "fondo-gradient":
          "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)",
      },
      keyframes: {
        borderMagic: {
          "0%": { borderColor: "#5ddcff" }, // Azul claro
          "25%": { borderColor: "#3c67e3" }, // Azul oscuro
          "50%": { borderColor: "#4e00c2" },
          "75%": { borderColor: "#3c67e3" }, // Azul oscuro
          "100%": { borderColor: "#5ddcff" }, // Azul claro
        },
      },
      animation: {
        borderMagic: "borderMagic 2.5s linear infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
