import { useAuthContext } from '@/context/authContext';
import { Redirect, Stack } from 'expo-router';
import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AppLayout() {
  const { loading, isLoggedIn } = useAuthContext();

  if (loading) {
    return (
      <SafeAreaView className="bg-white h-full flex justify-center items-center">
        <ActivityIndicator className="text-primary-300" size={'large'} />
      </SafeAreaView>
    );
  }

  if (!isLoggedIn) return <Redirect href="/signIn" />;

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />;
    </Stack>
  );
}
