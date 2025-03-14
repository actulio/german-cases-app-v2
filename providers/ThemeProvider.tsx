import { themes } from '@/utils/color-theme';
import { useColorScheme } from 'nativewind';
import React, { createContext } from 'react';
import { View } from 'react-native';

interface ThemeProviderProps {
  children: React.ReactNode;
}
export const ThemeContext = createContext<{ theme: 'light' | 'dark' }>({ theme: 'light' });

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { colorScheme } = useColorScheme();
  const theme = colorScheme || 'light';

  return (
    <ThemeContext.Provider value={{ theme }}>
      <View style={themes[theme]} className="flex-1">
        {children}
      </View>
    </ThemeContext.Provider>
  );
};
