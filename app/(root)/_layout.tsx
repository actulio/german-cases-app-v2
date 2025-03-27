import ProgressHeader from '@/components/shared/ProgressHeader';
import { useAuthContext } from '@/context/authContext';
import { useTheme } from '@/hooks/useTheme';
import { Redirect, Stack } from 'expo-router';
import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AppLayout() {
  const { loading, isLoggedIn } = useAuthContext();
  const { colors } = useTheme();

  if (loading) {
    return (
      <SafeAreaView className="bg-background-primary h-full flex justify-center items-center">
        <ActivityIndicator className="text-primary-300" size={'large'} />
      </SafeAreaView>
    );
  }

  if (!isLoggedIn) return <Redirect href="/signIn" />;

  return (
    // FIXME: maybe consider only the safe area
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors['--color-background-primary'] },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(exercises)/articles/[id]" // FIXME: this name flashes going back on Android
        options={{
          headerTitle: () => <ProgressHeader />,
          headerTintColor: colors['--color-primary-300'],
          contentStyle: { borderBottomWidth: 0 },
        }}
      />
    </Stack>
  );
}
