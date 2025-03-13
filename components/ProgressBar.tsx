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
      duration: 1000,
      easing: Easing.in(Easing.bounce),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stats]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: `${progress.value}%`,
      backgroundColor: '#32de84',
      borderRadius: 10,
    };
  });

  const innerAnimatedStyle = useAnimatedStyle(() => {
    // NOTE: doing these calculations because i could not find any other way
    // to get the inner bar to be the same size as the outer bar - some margin
    const parentWidth = (progress.value / 100) * 220;
    const adjustedWidth = parentWidth > 24 ? parentWidth - 12 : 0;

    return {
      width: adjustedWidth,
      paddingHorizontal: parentWidth > 24 ? 6 : 0,
      height: '20%',
      top: '20%',
      left: 4,
      backgroundColor: '#4FFFB0',
      borderRadius: 10,
    };
  });

  return (
    //TODO: to use w-full we need to make the inner bar work correctly
    // <View className="flex-row justify-between w-full items-center">
    <View className="flex-row justify-center w-full items-center">
      <View className="flex-row mx-2 h-5 w-[220px] overflow-hidden rounded-xl bg-gray-300">
        <Animated.View style={animatedStyle}>
          <Animated.View style={innerAnimatedStyle} />
        </Animated.View>
      </View>

      <Text
        style={{
          fontFamily: 'Rubik-Medium',
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
