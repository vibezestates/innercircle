/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}"
    ],
    safelist: [
    "dm-serif",
    "dm-serif-italic",
    "inter-tight",
    "inter-tight-italic",
    "bgline",
    "leftborder",
    "fw500"
  ],
    theme: {
      extend: {
        fontFamily: {
          maharlika: ['Maharlika', 'sans-serif'], // 👈 this must match your @font-face
        },
      },
    },
    plugins: [],
  }
  