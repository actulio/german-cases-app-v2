/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik-Regular', 'sans-serif'],
        'rubik-bold': ['Rubik-Bold', 'sans-serif'],
        'rubik-extrabold': ['Rubik-ExtraBold', 'sans-serif'],
        'rubik-medium': ['Rubik-Medium', 'sans-serif'],
        'rubik-semibold': ['Rubik-SemiBold', 'sans-serif'],
        'rubik-light': ['Rubik-Light', 'sans-serif'],
      },
      colors: {
        primary: {
          300: 'var(--color-primary-300)',
          500: 'var(--color-primary-500)',
          700: 'var(--color-primary-700)',
          900: 'var(--color-primary-900)',
        },
        secondary: {
          300: 'var(--color-secondary-300)',
          500: 'var(--color-secondary-500)',
          700: 'var(--color-secondary-700)',
        },
        tertiary: {
          300: 'var(--color-tertiary-300)',
          500: 'var(--color-tertiary-500)',
          700: 'var(--color-tertiary-700)',
        },
        background: 'var(--color-background)',
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          error: 'var(--color-text-error)',
        },
        error: {
          300: 'var(--color-error-300)',
          500: 'var(--color-error-500)',
        },
        accent: {
          500: 'var(--color-accent-500)',
        },
      },
    },
  },
  plugins: [],
};
// error: '#F75555',
