module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.vue"]
  },
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-shade": "var(--color-primary-shade)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)",
        dark: "var(--color-dark)",
        gray2: "var(--color-gray)"
      }
    },
    screens: {
      'sm': '599px',
      // => @media (min-width: 640px) { ... }

      'md': '600px',
      // => @media (min-width: 768px) { ... }

      'lg': '900px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  variants: {},
  plugins: []
};
