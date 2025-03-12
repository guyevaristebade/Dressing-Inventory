/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Permet d'activer le dark mode avec la classe "dark"
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5865F2", // Bleu Discord
        background: "#36393F", // Fond sombre
        dark: "#2F3136", // Fond des cartes / messages
        darker: "#202225", // Fond des barres latérales
        text: "#DCDDDE", // Texte principal
        textMuted: "#B9BBBE", // Texte secondaire
        border: "#4F545C", // Bordures / Séparateurs
        success: "#43B581", // Vert (notifications, status)
        danger: "#ED4245", // Rouge (erreurs, alertes)
        warning: "#FAA61A", // Orange (avertissements)
      },
    },
  },
  plugins: [],
};
