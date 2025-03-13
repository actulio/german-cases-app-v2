import { ThemeContext } from '@/context/themeContext';
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

interface BottomSheetProps {
  shouldShow: boolean;
  isCorrect: boolean;
  text: string;
}

const BottomSheet = ({ shouldShow, isCorrect, text }: BottomSheetProps) => {
  const height = useSharedValue(0);
  const { theme } = React.useContext(ThemeContext);

  useEffect(() => {
    height.value = withSpring(shouldShow ? 160 : 0, { damping: 80, stiffness: 200 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldShow]);

  return (
    <>
      {shouldShow ? (
        <Animated.View
          className="w-full bg-violet-300 absolute bottom-0 px-5 py-3"
          style={{ height }}
        >
          {isCorrect ? (
            <Text className="font-rubik-medium text-xl" style={{ color: theme.bsTxtCorrect }}>
              Correct!
            </Text>
          ) : (
            <Text className="font-rubik-medium text-xl" style={{ color: theme.bsTxtWrong }}>
              The correct answer is: {text.charAt(0).toUpperCase().concat(text.slice(1))}
            </Text>
          )}
        </Animated.View>
      ) : null}
    </>
  );
};

export default BottomSheet;
