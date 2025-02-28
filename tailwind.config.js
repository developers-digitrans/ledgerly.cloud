/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Roboto", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0047BB", // Accountfy blue
          50: "#E6F0FF",
          100: "#CCE0FF",
          200: "#99C2FF",
          300: "#66A3FF",
          400: "#3385FF",
          500: "#0047BB",
          600: "#003A96",
          700: "#002C70",
          800: "#001D4B",
          900: "#000F25",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#EB5424", // Auth0 orange
          50: "#FEF2ED",
          100: "#FCE5DB",
          200: "#F9CBB7",
          300: "#F5A283",
          400: "#F07853",
          500: "#EB5424",
          600: "#BC431D",
          700: "#8D3216",
          800: "#5E210E",
          900: "#2F1107",
          foreground: "#FFFFFF",
        },
        gray: {
          50: "#F5F7FA",
          100: "#E4E9F2",
          200: "#CBD2E0",
          300: "#A4B0C3",
          400: "#7C8A9C",
          500: "#5C6779",
          600: "#454D5D",
          700: "#2E3440",
          800: "#1F232D",
          900: "#0F1218",
        },
        destructive: {
          DEFAULT: "#FF4D4F",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F5F7FA",
          foreground: "#5C6779",
        },
        accent: {
          DEFAULT: "#E4E9F2",
          foreground: "#2E3440",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#2E3440",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#2E3440",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      boxShadow: {
        auth0:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "auth0-md":
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "auth0-lg":
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
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
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "slide-up": {
          from: { transform: "translateY(10px)", opacity: 0 },
          to: { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
