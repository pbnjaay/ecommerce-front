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
    }
  },
  variants: {},
  plugins: []
};
