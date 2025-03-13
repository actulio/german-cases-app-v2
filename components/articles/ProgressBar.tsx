import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface ProgressBarProps {
  stats: {
    current: number;
    max: number;
  };
}

const ProgressBar = ({ stats }: ProgressBarProps) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    const newProgress = stats.max === 0 ? 0 : Math.min(stats.current / stats.max, 1);
    // NOTE: using withSpring makes it flash and zeroing
    progress.value = withTiming(newProgress * 100, {
      duration: 500,
      easing: Easing.in(Easing.bounce),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stats]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: `${progress.value}%`,
    };
  });

  return (
    <View className="flex-row justify-center items-center">
      <View className="flex-row h-5 flex-1 overflow-hidden rounded-xl bg-gray-300">
        <Animated.View className="rounded-xl bg-[#32de84]" style={[animatedStyle]}>
          <View className="h-[25%] top-[20%] mx-1 rounded-lg bg-[#4FFFB0]" />
        </Animated.View>
      </View>

      <Text
        className="font-rubik-medium text-sm mx-2"
        style={{
          color:
            stats.current === stats.max ? (stats.max === 0 ? '#C8C8C8' : '#a4dab2') : '#666876',
        }}
      >
        {`${stats.current}/${stats.max}`}
      </Text>
    </View>
  );
};

export default ProgressBar;
