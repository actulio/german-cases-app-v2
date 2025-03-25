import { vars } from 'nativewind';

type ColorVars = Record<`--${string}`, string>;

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

  '--color-background-primary': '#FFFFFF',
  '--color-background-secondary': '#e2e5e9',
  '--color-background-tertiary': '#a9b1bc',
  '--color-background-quaternary': '#657081',

  '--color-text-primary': '#262626',
  '--color-text-active': '#FFFFFF',
  '--color-text-inactive': '#666666',
  '--color-text-disabled': '#F5F5F5',

  '--color-error-500': '#f25050',
  '--color-error-300': '#f78888',
  '--color-error-700': '#fab8b8',

  '--color-success-300': '#4FC9AE',
  '--color-success-500': '#36b095',
  '--color-success-700': '#247563',

  '--color-shadow-500': '#cccccc',
} as const;

//TODO: actually put correct colors
export const DARK_THEME = {
  '--color-primary-300': '#9d81e4',
  '--color-primary-500': '#401f93',
  '--color-primary-700': '#2e1669',
  '--color-primary-900': '#1b0d3f',

  '--color-secondary-300': '#DDA07C',
  '--color-secondary-500': '#C66E34',
  '--color-secondary-700': '#9E4B18',

  '--color-tertiary-300': '#7CCFC0',
  '--color-tertiary-500': '#3FAF94',
  '--color-tertiary-700': '#1E7D64',

  '--color-background-primary': '#121417',
  '--color-background-secondary': '#1a1d23',
  '--color-background-tertiary': '#22252b',
  '--color-background-quaternary': '#3a3a3a',

  '--color-text-primary': '#f2f2f2',
  '--color-text-active': '#EAEAEA',
  '--color-text-inactive': '#888888',
  '--color-text-disabled': '#555555',

  '--color-error-300': '#7a0606',
  '--color-error-500': '#F75555',
  '--color-error-700': '#f98585',

  '--color-success-300': '#184e42',
  '--color-success-500': '#247563',
  '--color-success-700': '#36b095',

  '--color-shadow-500': '#111111', // Deep shadow for dark theme
} as const;

export const themes = {
  light: vars(LIGHT_THEME),
  dark: vars(DARK_THEME),
};

export const themeColors = {
  light: LIGHT_THEME,
  dark: DARK_THEME,
};
