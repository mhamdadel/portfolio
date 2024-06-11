/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        "primary-variant": 'var(--primary-variant-color)',
        secondary: 'var(--secondary-color)',
        "secondary-variant": 'var(--secondary-variant-color)',
        accent: 'var(--accent-color)',
        background: 'var(--background-color)',
        surface: 'var(--surface-color)',
        error: 'var(--error-color)',
        warning: 'var(--warning-color)',
        success: 'var(--success-color)',
        info: 'var(--info-color)',
        "on-primary": 'var(--on-primary-color)',
        "on-secondary": 'var(--on-secondary-color)',
        "on-accent": 'var(--on-accent-color)',
        "on-surface": 'var(--on-surface-color)',
        "on-error": 'var(--on-error-color)',
        "on-warning": 'var(--on-warning-color)',
        "on-success": 'var(--on-success-color)',
        "on-info": 'var(--on-info-color)',
        text: 'var(--text-color)',
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
}

