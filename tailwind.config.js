/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    screens: {
      xs: "320px",
      sm: "540px",
      md: "768px",
      mdl: "976px",
      lg: "1024px",
      mxl: "1162px",
      xl: "1440px",
      "2xl": "1570px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        white: "#efe3facc",
        black: "#000",
        lightGray: "#D7D6DA",
        grey: "#BABABA",
        darkBrown: "#D81A77",
        slateBlack: "#2C2C2C",
        lightOrange: "#F5841F",
        darkBlue: "#210053",
        deepBlue: "#19253E",
        red: "#D81A77",
        lightWhite: "rgba(242, 242, 242, 0.10)",
        lightBlack: "rgba(255, 255, 255, 0.05)",
        lightGrey: "rgba(241, 218, 96, 0.10)",
        deepPink: "#6F133F",
        amberYellow: "#F1DA60",
        deepPurple: "#332668",
        cardText: "#4F4F4F",
        modalBg: "rgba(0, 0, 0, 0.40)",
        gradientColor: "linear-gradient(124deg, #6F133F -232.39%, #332668 243.87%)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}