import images from '@/constants/images';
import { useAuthContext } from '@/context/authContext';
import { login } from '@/lib/appwrite';
import { Redirect } from 'expo-router';
import React from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignIn = () => {
  const { refetch, loading, isLoggedIn } = useAuthContext();

  if (!loading && isLoggedIn) return <Redirect href="/" />;

  const handleLogin = async () => {
    const result = await login();
    if (result) {
      refetch();
    } else {
      Alert.alert('Error', 'Failed to login');
    }
  };

  //FIXME: fix colors here
  return (
    <SafeAreaView className="bg-background-primary h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image source={images.onboarding} className="w-full h-4/6" resizeMode="contain" />
        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Welcome to German Cases v2
          </Text>
          <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
            Let&apos;s get you closer to {'\n'}
            <Text className="text-primary-300">learning German</Text>
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
    </SafeAreaView>
  );
};

export default SignIn;
