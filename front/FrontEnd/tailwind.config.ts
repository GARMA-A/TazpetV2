import type { Config } from 'tailwindcss'

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
 fontFamily: {
        alata: ["Alata", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
}satisfies Config;
