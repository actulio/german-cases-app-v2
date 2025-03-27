import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Animated, { Layout } from 'react-native-reanimated';

interface Props {
  data: string[];
  selected: string;
  disabled: boolean;
  onPress: (value: string) => void;
}

const GridOptions = (props: Props) => {
  const { data, selected, disabled, onPress } = props;

  const handleOnPress = (value: string) => {
    const newValue = selected !== value ? value : '';
    onPress(newValue);
  };

  const getStyles = (value: string) =>
    selected !== value
      ? 'bg-background-primary border-background-tertiary'
      : 'bg-primary-500 border-primary-300';

  return (
    <View className="flex items-center justify-center">
      <View className="flex flex-row flex-wrap justify-around top-0 w-[300px] ">
        {data.map((value) => {
          const styles = getStyles(value);
          return (
            <Animated.View key={value} layout={Layout.springify().damping(15).stiffness(100)}>
              <TouchableOpacity
                // NOTE: on IOS simulator onPress is not working
                disabled={disabled}
                onPressIn={() => handleOnPress(value)}
                activeOpacity={0.3}
                className={`justify-center items-center mt-3 p-3 border border-b-4 rounded-2xl h-[50px] w-[80px] ${styles}`}
              >
                <Text
                  className={`font-rubik text-xl ${selected !== value ? 'text-text-inactive' : 'text-text-active'}`}
                >
                  {value}
                </Text>
              </TouchableOpacity>
            </Animated.View>
          );
        })}
      </View>
    </View>
  );
};

export default GridOptions;
