import { vars } from 'nativewind';

type ColorVars = Record<`--${string}`, string | number>;

export const LIGHT_THEME: ColorVars = {
  '--color-primary-300': '#B79AF0',
  '--color-primary-500': '#6A40D6', // Main brand purple
  '--color-primary-700': '#4D2EA3',
  '--color-primary-900': '#2E1A69', //

  '--color-secondary-300': '#F5C8A7', // Soft peach
  '--color-secondary-500': '#E98E50',
  '--color-secondary-700': '#CC6C2D',

  '--color-tertiary-300': '#A5E4D6', // Soft teal
  '--color-tertiary-500': '#4FC9AE',
  '--color-tertiary-700': '#2A9C84',

  '--color-background-light': '#FFFFFF',
  '--color-background-medium': '#d1d5db',
  '--color-background-dark': '#22252b',

  '--color-text-active': '#FFFFFF',
  '--color-text-inactive': '#666666',
  '--color-text-disabled': '#F5F5F5',

  '--color-error-500': '#f25050',
  '--color-error-300': '#fab8b8',
  '--color-accent-500': '#F5F5F5',

  '--color-shadow-500': '#cccccc',
};

//TODO: actually put correct colors
export const DARK_THEME: ColorVars = {
  '--color-primary-300': '#9A73EB', // Slightly muted purple
  '--color-primary-500': '#6A40D6', // Main brand purple
  '--color-primary-700': '#3D2486', // Deeper purple
  '--color-primary-900': '#2E1A69', //

  '--color-secondary-300': '#D98A66', // Muted peach
  '--color-secondary-500': '#C76A3F', // Rich orange
  '--color-secondary-700': '#A24D26', // Deep orange

  '--color-tertiary-300': '#82D1C0', // Soft teal
  '--color-tertiary-500': '#3CA38D', // Main teal
  '--color-tertiary-700': '#267E69', // Darker teal

  '--color-background-light': '#FFFFFF',
  '--color-background-medium': '#d1d5db',
  '--color-background-dark': '#22252b',

  '--color-text-active': '#FFFFFF',
  '--color-text-inactive': '#222222',
  '--color-text-disabled': '#F5F5F5',

  '--color-error-500': '#f25050',
  '--color-error-300': '#fab8b8',
  '--color-accent-500': '#F5F5F5',

  '--color-shadow-500': '#cccccc',
};

export const themes = {
  light: vars(LIGHT_THEME),
  dark: vars(DARK_THEME),
};
