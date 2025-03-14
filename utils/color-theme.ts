import { vars } from 'nativewind';

export const themes = {
  light: vars({
    '--color-primary-300': '#B79AF0', // Soft purple
    '--color-primary-500': '#6A40D6', // Main brand purple
    '--color-primary-700': '#4D2EA3', // Darker purple
    '--color-primary-900': '#2E1A69', //

    '--color-secondary-300': '#F5C8A7', // Soft peach
    '--color-secondary-500': '#E98E50', // Warm orange
    '--color-secondary-700': '#CC6C2D', // Deeper orange

    '--color-tertiary-300': '#A5E4D6', // Soft teal
    '--color-tertiary-500': '#4FC9AE', // Main teal
    '--color-tertiary-700': '#2A9C84', // Darker teal

    '--color-background': '#FFFFFF', // Light background
    '--color-text-primary': '#222222', // Main text
    '--color-text-secondary': '#666666', // Lighter text
    '--color-text-error': '#f25050',

    '--color-error-500': '#f25050', // Red
    '--color-error-300': '#fab8b8', // Red
    '--color-accent-500': '#F5F5F5',
  }),

  dark: vars({
    '--color-primary-300': '#9A73EB', // Slightly muted purple
    '--color-primary-500': '#6A40D6', // Main brand purple
    '--color-primary-700': '#3D2486', // Deeper purple

    '--color-secondary-300': '#D98A66', // Muted peach
    '--color-secondary-500': '#C76A3F', // Rich orange
    '--color-secondary-700': '#A24D26', // Deep orange

    '--color-tertiary-300': '#82D1C0', // Soft teal
    '--color-tertiary-500': '#3CA38D', // Main teal
    '--color-tertiary-700': '#267E69', // Darker teal

    '--color-background': '#0F0F0F', // Dark background
    '--color-text-primary': '#EDE7FB', // Light text
    '--color-text-secondary': '#B3A6D1', // Muted text
    '--color-text-error': '#f25050',

    '--color-error-500': '#f25050', // Red
    '--color-error-300': '#fab8b8', // Red
    '--color-accent-500': '#F5F5F5',
  }),
};
