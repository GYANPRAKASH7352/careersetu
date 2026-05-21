import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cs: {
          purple: "#c8b4ff",
          "purple-dark": "#7f77dd",
          teal: "#5DCAA5",
          amber: "#EF9F27",
          coral: "#F0997B",
          blue: "#82aaff",
          "bg-primary": "#0d0d1a",
          "bg-secondary": "#1a1a2e",
          "bg-card": "#0a0a15",
          border: "#2a2a4a",
          "border-light": "#1e1e3a",
          "text-primary": "#e8e8f0",
          "text-secondary": "#8888aa",
          "text-muted": "#546e7a",
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"Noto Sans"', "system-ui", "sans-serif"],
        hindi: ['"Noto Sans"', '"Inter"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
