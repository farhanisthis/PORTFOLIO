/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#080808",
          panel: "#0F0F0F",
          card: "#141210",
        },
        champagne: {
          DEFAULT: "#C6A87D",
          soft: "#D4BC96",
          muted: "rgba(198, 168, 125, 0.18)",
          line: "rgba(198, 168, 125, 0.28)",
        },
        ink: {
          primary: "#EDEAE2",
          secondary: "#8E8A80",
          muted: "#5A564F",
        },
        kreeva: {
          crimson: "#8B1E2B",
          dark: "#4A0E16",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-ibm-plex-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
