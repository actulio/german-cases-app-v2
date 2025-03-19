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
    // NOTE: using withSpring makes it flash
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
      <View className="flex-row h-5 flex-1 overflow-hidden rounded-xl bg-background-secondary">
        <Animated.View className="rounded-xl bg-primary-500" style={[animatedStyle]}>
          <View className="h-[25%] top-[20%] mx-2 rounded-lg bg-primary-300" />
        </Animated.View>
      </View>

      <Text
        className={`font-rubik-medium text-base mx-2 ${stats.current === stats.max ? 'text-success-500' : 'text-text-inactive'}`}
      >
        {`${stats.current}/${stats.max}`}
      </Text>
    </View>
  );
};

export default ProgressBar;
