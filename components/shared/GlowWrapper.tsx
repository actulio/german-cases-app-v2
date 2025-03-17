import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

interface GlowingWrapperProps {
  isGlowing: boolean;
  children: React.ReactNode;
  glowColor?: string;
}

const GlowingWrapper: React.FC<GlowingWrapperProps> = ({ isGlowing, children, glowColor }) => {
  const glowOpacity = useSharedValue(0);

  useEffect(() => {
    if (isGlowing) {
      glowOpacity.value = withRepeat(
        withSequence(
          withTiming(1, { duration: 500 }), // Brighten
          withTiming(0.5, { duration: 500 }), // Dim
        ),
        -1, // Infinite loop
        true, // Reverse direction
      );
    } else {
      glowOpacity.value = withTiming(0, { duration: 300 }); // Remove glow
    }
  }, [isGlowing]);

  const animatedStyle = useAnimatedStyle(() => ({
    shadowOpacity: glowOpacity.value,
    shadowRadius: glowOpacity.value * 25, // Controls glow intensity
    shadowColor: glowColor, // Allow dynamic glow color
  }));

  return <Animated.View style={[styles.wrapper, animatedStyle]}>{children}</Animated.View>;
};

const styles = StyleSheet.create({
  wrapper: {
    shadowOffset: { width: 0, height: 0 }, // Even glow all around
    elevation: 10, // Android shadow effect
  },
});

export default GlowingWrapper;
