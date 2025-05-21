// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Important: assurez-vous que cette ligne est correcte
  ],
  theme: {
    extend: {
      colors: {
        'klappers-yellow': '#FFD700', // Exemple de couleur jaune Klappers
        'klappers-dark': '#1A1A1A',   // Exemple de couleur sombre
        'klappers-bg': '#2C2C2C',     // Couleur de fond principale
        'klappers-orange': '#FFA500', // Exemple de couleur orange Klappers
      }
    },
  },
  plugins: [],
}