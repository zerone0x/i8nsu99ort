/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // mode:'jit',
  theme: {
    extend: {
      keyframes: {
        colors: {
          "custom-beige": "#F7F6F2",
          customGreen: "#7EC6B5",
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 0.5s ease-in-out infinite",
      },
      // backgroundImage: theme => ({
      //   'gradient-to-green-blue': 'linear-gradient(to right, #38b2ac, #4299e1)',
      // })
    },
  },
  plugins: [
    // require('@tailwindcss/jit')({
    // })
  ],
};
