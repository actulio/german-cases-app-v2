import AuthProvider from '@/context/authContext';
import { storageGet } from '@/lib/storage';
import { ThemeProvider } from '@/providers/ThemeProvider';
import usePracticeStore from '@/store/practice';
import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import './global.css';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Rubik-Bold': require('../assets/fonts/Rubik-Bold.ttf'),
    'Rubik-ExtraBold': require('../assets/fonts/Rubik-ExtraBold.ttf'),
    'Rubik-Medium': require('../assets/fonts/Rubik-Medium.ttf'),
    'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
    'Rubik-SemiBold': require('../assets/fonts/Rubik-SemiBold.ttf'),
    'Rubik-Light': require('../assets/fonts/Rubik-Light.ttf'),
  });

  const setInitialValues = usePracticeStore.use.setInitialValues();

  useEffect(() => {
    const fetchInitialValues = async () => {
      const progress = {
        definite: {
          current: Number((await storageGet('definite.current')) || 0),
          max: Number((await storageGet('definite.max')) || 0),
        },
        indefinite: {
          current: Number((await storageGet('indefinite.current')) || 0),
          max: Number((await storageGet('indefinite.max')) || 0),
        },
      };
      setInitialValues(progress);
    };
    if (fontsLoaded) {
      SplashScreen.hideAsync();
      fetchInitialValues();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider>
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </ThemeProvider>
  );
}
