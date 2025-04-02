import React, { useEffect } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

interface Props {
  hasSelection: boolean;
  isCorrect: boolean;
  isSubmitted: boolean;
  onPress: () => void;
}

const DURATION = 300;

const ContinueButton = ({ hasSelection, isCorrect, isSubmitted, onPress }: Props) => {
  const continueY = useSharedValue(0);
  const nextY = useSharedValue(30); // Start off-screen

  useEffect(() => {
    if (isSubmitted) {
      // Move "CONTINUE" up & hide, move "NEXT" in
      continueY.value = withTiming(-30, {
        duration: DURATION,
        easing: Easing.out(Easing.quad),
      });
      nextY.value = withDelay(
        100,
        withTiming(0, { duration: DURATION, easing: Easing.out(Easing.quad) }),
      );
    } else {
      // Reset positions
      continueY.value = withTiming(0, {
        duration: DURATION,
        easing: Easing.out(Easing.quad),
      });
      nextY.value = withTiming(30, {
        duration: DURATION,
        easing: Easing.out(Easing.quad),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitted]);

  const continueStyle = useAnimatedStyle(() => {
    // Calculate opacity based on position for smoother transition
    const opacity = interpolate(continueY.value, [-30, -15, 0], [0, 0.5, 1]);
    return {
      transform: [{ translateY: continueY.value }],
      opacity,
    };
  });

  const nextStyle = useAnimatedStyle(() => {
    // Calculate opacity based on position for smoother transition
    const opacity = interpolate(nextY.value, [30, 15, 0], [0, 0.5, 1]);
    return {
      transform: [{ translateY: nextY.value }],
      opacity,
    };
  });

  const getButtonStyles = () => {
    if (!hasSelection) {
      return {
        colors: 'bg-background-secondary border-background-tertiary',
        textColor: 'text-text-inactive',
      };
    }

    if (isSubmitted) {
      return {
        colors: isCorrect ? 'bg-success-500 border-success-700' : 'bg-error-500 border-error-700',
        textColor: 'text-text-active',
      };
    }

    return { colors: 'bg-primary-500 border-primary-300', textColor: 'text-text-active' };
  };

  const { colors, textColor } = getButtonStyles();

  return (
    <TouchableWithoutFeedback disabled={!hasSelection} onPress={onPress} className="flex-1">
      <View
        className={`${colors} items-center justify-center absolute bottom-0 left-0 right-0 h-[60px] m-[50px] rounded-full border border-b-4 z-20 overflow-hidden`}
      >
        <Animated.View className="absolute" style={continueStyle}>
          <Text className={`${textColor} text-2xl font-rubik-bold`}>Answer</Text>
        </Animated.View>
        <Animated.View className="absolute" style={nextStyle}>
          <Text className={`${textColor} text-2xl font-rubik-bold`}>Next</Text>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ContinueButton;
