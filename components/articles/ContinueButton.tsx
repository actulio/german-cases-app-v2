import React, { useEffect } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface Props {
  hasSelection: boolean;
  isCorrect: boolean;
  isSubmitted: boolean;
  onPress: () => void;
}

const ContinueButton = ({ hasSelection, isCorrect, isSubmitted, onPress }: Props) => {
  const continueY = useSharedValue(0);
  const nextY = useSharedValue(30); // Start off-screen

  // TODO: maybe this is too much
  // const opacityContinue = useSharedValue(1);
  // const opacityNext = useSharedValue(0);

  useEffect(() => {
    if (isSubmitted) {
      // Move "CONTINUE" up & hide, move "NEXT" in

      //FIXME: this animation is still junky
      continueY.value = withTiming(-30, { duration: 200, easing: Easing.in(Easing.cubic) });
      nextY.value = withTiming(0, { duration: 200, easing: Easing.in(Easing.bounce) });
      // opacityContinue.value = withTiming(0, { duration: 200 });
      // opacityNext.value = withTiming(1, { duration: 400 });
    } else {
      // Reset positions
      continueY.value = withTiming(0, { duration: 400, easing: Easing.in(Easing.bounce) });
      nextY.value = withTiming(30, { duration: 200 });
      // opacityContinue.value = withTiming(1, { duration: 400 });
      // opacityNext.value = withTiming(0, { duration: 200 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitted]);

  const continueStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: continueY.value }],
    opacity: continueY.value === -30 ? 0 : 1,
    // opacity: opacityContinue.value,
  }));

  const nextStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: nextY.value }],
    // opacity: opacityNext.value,
    opacity: nextY.value === 0 ? 1 : 0,
  }));

  const getButtonStyles = () => {
    if (!hasSelection) {
      return { backgroundColor: 'bg-accent-500', textColor: 'text-text-inactive' };
    }

    if (isSubmitted) {
      return {
        backgroundColor: isCorrect ? 'bg-tertiary-500' : 'bg-error-500',
        textColor: 'text-text-active',
      };
    }

    return { backgroundColor: 'bg-primary-500', textColor: 'text-text-active' };
  };

  const { backgroundColor, textColor } = getButtonStyles();

  return (
    <TouchableWithoutFeedback
      disabled={!hasSelection} // Button should be disabled if no selection is made
      onPress={onPress}
      className="flex-1"
    >
      <View
        className={`${backgroundColor} items-center justify-center absolute bottom-0 left-0 right-0 h-[60px] m-[50px] rounded-full border border-b-4 border-[#cccccc] z-20 overflow-hidden`}
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
