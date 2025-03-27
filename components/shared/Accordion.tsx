import { Icons } from '@/constants/icons';
import React, { useState } from 'react';
import { LayoutChangeEvent, Text, TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export const Accordion = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const height = useSharedValue(0);
  const rotate = useSharedValue('0deg');

  const animatedHeight = useAnimatedStyle(() => ({
    height: withTiming(height.value, { duration: 300 }),
    overflow: 'hidden',
  }));

  const animatedArrow = useAnimatedStyle(() => ({
    transform: [{ rotate: withTiming(rotate.value, { duration: 300 }) }],
  }));

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    height.value = isOpen ? 0 : contentHeight;
    rotate.value = isOpen ? '0deg' : '180deg';
  };

  const handleContentLayout = (event: LayoutChangeEvent) => {
    const { height: measuredHeight } = event.nativeEvent.layout;
    setContentHeight(measuredHeight);
    // Initialize height if not open
    if (!isOpen) height.value = 0;
  };

  return (
    <View className="mb-2 rounded-lg border border-background-secondary overflow-hidden">
      <TouchableOpacity
        className="flex-row justify-between items-center p-4"
        onPress={toggleAccordion}
      >
        <Text className="font-medium text-text-primary">{title}</Text>
        <Animated.View style={animatedArrow}>
          <Icons.ChevronDown className="text-text-primary size-5" />
        </Animated.View>
      </TouchableOpacity>

      <Animated.View style={animatedHeight}>
        <View
          onLayout={handleContentLayout}
          className="pb-4 px-4 flex-row flex-wrap gap-3 absolute"
        >
          {children}
        </View>
      </Animated.View>
    </View>
  );
};
