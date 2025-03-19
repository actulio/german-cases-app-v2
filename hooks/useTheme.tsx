import { ThemeContext } from '@/providers/ThemeProvider';
import { themeColors } from '@/utils/color-theme';
import { useContext } from 'react';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return { colors: themeColors[context.theme] };
};
