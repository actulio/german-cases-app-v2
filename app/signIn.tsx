import images from '@/constants/images';
import { useAuthContext } from '@/context/authContext';
import { login } from '@/lib/appwrite';
import { Redirect } from 'expo-router';
import React from 'react';
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';

const SignIn = () => {
  const { refetch, loading, isLoggedIn } = useAuthContext();
  const colorScheme = useColorScheme();

  if (!loading && isLoggedIn) return <Redirect href="/" />;

  const handleLogin = async () => {
    const result = await login();
    if (result) {
      refetch();
    } else {
      Alert.alert('Error', 'Failed to login');
    }
  };

  return (
    <ScrollView contentContainerClassName="h-full" className="bg-background-primary">
      <View className="w-full h-4/6 relative">
        <Image
          source={images.onboardingFlag}
          className="w-full h-full absolute"
          resizeMode="cover"
        />
        <View className="absolute bottom-0 left-0 right-0 w-full h-[100px] bg-transparent">
          {/* TODO: this should be a SVG */}
          <Image
            source={colorScheme === 'dark' ? images.wave : images.waveDark}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
      </View>

      <View className="px-10">
        <Text className="text-base text-center uppercase font-rubik-medium">
          Welcome to German Cases v2
        </Text>
        <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
          Let&apos;s get you closer to {'\n'}
          <Text className="text-primary-500">learning German</Text>
        </Text>
        <TouchableOpacity
          className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-16"
          onPress={handleLogin}
        >
          <View className="flex flex-row items-center justify-center">
            <Image source={images.google} className="w-5 h-5" resizeMode="contain" />
            <Text className="text-lg font-rubik-medium text-black-300 ml-2">
              Continue with Google
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignIn;
