import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: "var(--text)",
        placeholder: "var(--placeholder)",
        primary_gradient: "var(--primry-gradient)",
        second_gradient: "var(--second-gradient)",
      },
      fontSize: {
        sm: "var(--font-size-sm)",
        md: "var(--font-size-md)",
        lg: "var(--font-size-lg)",
        xl: "var(--font-size-xl)",
        xll: "var(--font-size-2xl)",
      },
      boxShadow: {
        custom: '0px 2px 7px 3px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
} satisfies Config;
