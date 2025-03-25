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
        background: {
          primary: 'var(--color-background-primary)',
          secondary: 'var(--color-background-secondary)',
          tertiary: 'var(--color-background-tertiary)',
        },

        text: {
          primary: 'var(--color-text-primary)',
          active: 'var(--color-text-active)',
          inactive: 'var(--color-text-inactive)',
          disabled: 'var(--color-text-disabled)',
        },
        error: {
          300: 'var(--color-error-300)',
          500: 'var(--color-error-500)',
          700: 'var(--color-error-700)',
        },
        success: {
          300: 'var(--color-success-300)',
          500: 'var(--color-success-500)',
          700: 'var(--color-success-700)',
        },
        shadow: {
          500: 'var(--color-shadow-500)',
        },
      },
    },
  },
  plugins: [],
};
