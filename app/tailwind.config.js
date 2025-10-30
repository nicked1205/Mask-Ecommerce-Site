/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#930009",            // Corporate red
          primaryHover: "#a6000a",       // Slightly lighter hover
          primaryAlpha: "rgba(147,0,9,0.7)", // Transparent hover bg
          accent: "#d6be71",
          accentHover: "#bfa24d", // darker gold hover
          text: "#222222",
          textMuted: "#666666",
          bg: "#ffffff",                 // Site background
          surface: "#ffffff",            // Card / section background
          border: "#dddddd",             // Borders
          borderFocus: "#930009",        // Focused borders
          inputText: "#414141",          // Input field text
          placeholder: "#b1b1b1",        // Placeholder text
          tableHeader: "#333333",        // Table header
          tableCell: "#444444",          // Table body
          lightBg: "#f7f7f7",            // FAQ / light backgrounds
          footerBg: "#141414",           // Footer background
          footerText: "#ffffff",         // Footer text
          footerLink: "#acacac",         // Footer link
          footerLinkHover: "#d6be71",    // Footer link hover

          alert: "#930009",
          alertBg: "#fbeaea",
          warning: "#d6be71",
          warningBg: "#fffaf0",
          info: "#2563EB",
          infoBg: "#eff6ff",
          success: "#22C55E",
          successBg: "#ecfdf5",
        },
      },
    },
  },
  plugins: [],
};
