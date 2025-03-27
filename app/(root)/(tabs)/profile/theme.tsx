import { Moon, Sun } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const SWITCH_WIDTH = 80;
const SWITCH_HEIGHT = 30;
const CIRCLE_SIZE = 26;

const ThemeScreen = () => {
  const { toggleColorScheme, colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const translateX = useSharedValue(isDarkMode ? -CIRCLE_SIZE : CIRCLE_SIZE);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: withTiming(translateX.value, { duration: 300 }) }],
  }));

  const handleToggle = () => {
    translateX.value = !isDarkMode ? -CIRCLE_SIZE : CIRCLE_SIZE;
    toggleColorScheme();
  };
  return (
    <View className="flex-1 bg-background-primary">
      <View className="justify-between items-center mt-8 mx-4 p-4 rounded-xl bg-background-secondary flex-row gap-5">
        <Text className="font-rubik text-text-primary text-lg">Toggle Dark Mode</Text>
        <Pressable
          onPress={handleToggle}
          className="flex-row items-center justify-center px-2 rounded-full bg-background-primary"
          style={{ width: SWITCH_WIDTH, height: SWITCH_HEIGHT }}
        >
          <Sun color="#facc15" size={18} />
          <Moon style={{ marginLeft: 'auto' }} color="#4A90E2" size={18} />
          <Animated.View
            className="bg-background-tertiary"
            style={[
              {
                position: 'absolute',
                width: CIRCLE_SIZE,
                height: CIRCLE_SIZE,
                borderRadius: CIRCLE_SIZE / 2,
                elevation: 5,
              },
              animatedStyle,
            ]}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default ThemeScreen;
