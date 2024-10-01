import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/services/Redux/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ["Red Hat Display", "sans-serif"],
        heading: ["Bricolage Grotesque", "sans-serif"],
      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#000000",
        "sunshine-yellow": "#FFC52F",
        "royal-blue": "#4132F0",
        "lime-green": "#B6D462",
        "spring-green": "#267E3E",
        "sky-blue": "#6F8FE3",
        apricot: "#FFA15C",
        coral: "#D9BF7D",
        tangerine: "#ED6839",
        "periwinkle-blue": "#7266FF",
        "slate-gray": "#797979",
        grayish: "#EAEAEA",
        cold: "#C2B6E7",
        seasalt: "#F8F8F8",
        "dark-purple": "#0B001F",
      },
      boxShadow: {
        primary: "6px 6px 0 #FFFFFF",
        secondary: "6px 6px 0 #000000",
        "sunshine-yellow": "6px 6px 0 #FFC52F",
        "royal-blue": "6px 6px 0 #4132F0",
        "lime-green": "6px 6px 0 #B6D462",
        "sky-blue": "6px 6px 0 #6F8FE3",
        apricot: "6px 6px 0 #FFA15C",
        coral: "6px 6px 0 #D9BF7D",
        tangerine: "6px 6px 0 #ED6839",
        "periwinkle-blue": "6px 6px 0 #7266FF",
        "slate-gray": "6px 6px 0 #797979",
        cold: "6px 6px 0 #C2B6E7",
        primary2: "4px 4px 0 #FFFFFF",
        secondary2: "4px 4px 0 #000000",
        "sunshine-yellow2": "4px 4px 0 #FFC52F",
        "royal-blue2": "4px 4px 0 #4132F0",
        "lime-green2": "4px 4px 0 #B6D462",
        "sky-blue2": "4px 4px 0 #6F8FE3",
        apricot2: "4px 4px 0 #FFA15C",
        coral2: "4px 4px 0 #D9BF7D",
        tangerine2: "4px 4px 0 #ED6839",
        "periwinkle-blue2": "4px 4px 0 #7266FF",
        "slate-gray2": "4px 4px 0 #797979",
        cold2: "4px 4px 0 #C2B6E7",
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["group-hover"],
      textColor: ["group-hover"],
    },
  },
  plugins: [],
}

export default config
