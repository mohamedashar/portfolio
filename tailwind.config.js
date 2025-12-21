/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      /* =========================
         FONT FAMILY
      ========================= */
      fontFamily: {
        sans: [
          "Metropolis",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },

      /* =========================
         COLORS
      ========================= */
      colors: {
        neon: "#00ff66",
      },

      /* =========================
         SHADOWS
      ========================= */
      boxShadow: {
        neon: "0 0 12px rgba(0, 255, 102, 0.6)",
        neonStrong: "0 0 24px rgba(0, 255, 102, 0.85)",
      },
    },
  },
  plugins: [],
};
