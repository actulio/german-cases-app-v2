import { useTheme } from '@/hooks/useTheme';
import { Stack } from 'expo-router';

export default function ProfileLayout() {
  const { colors } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors['--color-background-secondary'] },
        headerTintColor: colors['--color-text-primary'],
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Profile', headerShown: false }} />
      <Stack.Screen name="theme" options={{ title: 'Theme' }} />
      <Stack.Screen name="reset" options={{ title: 'Reset' }} />
    </Stack>
  );
}
