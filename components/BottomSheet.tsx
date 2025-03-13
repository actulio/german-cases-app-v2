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
    height.value = withSpring(shouldShow ? 200 : 0);
  }, [shouldShow]);

  return (
    <Animated.View
      style={{
        width: '100%',
        height,
        backgroundColor: 'violet',
      }}
    >
      {isCorrect ? (
        <Text style={{ color: theme.bsTxtCorrect }}>Correct!</Text>
      ) : (
        <Text style={{ color: theme.bsTxtWrong }}>
          The correct answer is: {text.charAt(0).toUpperCase().concat(text.slice(1))}
        </Text>
      )}
    </Animated.View>
  );
};

export default BottomSheet;
