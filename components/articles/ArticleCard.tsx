import GlowingWrapper from '@/components/shared/GlowWrapper';
import { CaseOption, GenderOption } from '@/constants/articles';
import { useTheme } from '@/hooks/useTheme';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

interface Props {
  title: CaseOption; //NOTE: this can probably be changed to accept a generic
  subtitle: GenderOption;
  choice: string;
  isSubmitted: boolean;
  isCorrect: boolean;
}

const ArticleCard = ({ title, subtitle, choice, isCorrect, isSubmitted }: Props) => {
  const translateX = useSharedValue(0);
  const { colors } = useTheme();

  useEffect(() => {
    if (isSubmitted && !isCorrect) {
      translateX.value = withSequence(
        withTiming(-10, { duration: 50 }),
        withTiming(10, { duration: 50 }),
        withTiming(-10, { duration: 50 }),
        withTiming(10, { duration: 50 }),
        withTiming(0, { duration: 50 }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitted, isCorrect]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <GlowingWrapper isGlowing={isSubmitted && isCorrect} glowColor={colors['--color-primary-500']}>
      <Animated.View
        className="w-[250px] h-[200px] rounded-2xl mb-2 p-5 items-center justify-center shadow-lg bg-primary-500 "
        style={[animatedStyle]}
      >
        <Text className="text-3xl capitalize font-rubik-medium text-text-active">{title}</Text>
        <Text className="text-2xl capitalize font-rubik-medium text-secondary-500">{subtitle}</Text>
        <View
          className={`${choice ? 'bg-transparent' : 'bg-primary-300'} items-center justify-center mt-4 h-10 w-20`}
        >
          <Text className="text-white text-2xl font-rubik">{choice}</Text>
        </View>
      </Animated.View>
    </GlowingWrapper>
  );
};

export default ArticleCard;
