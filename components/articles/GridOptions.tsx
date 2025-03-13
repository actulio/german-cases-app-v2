import { ThemeContext } from '@/context/themeContext';
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
  const { theme } = React.useContext(ThemeContext);

  const handleOnPress = (value: string) => {
    const newValue = selected !== value ? value : '';
    onPress(newValue);
  };

  return (
    <View className="flex items-center justify-center">
      <View className="flex flex-row flex-wrap justify-around top-0 w-[300px] ">
        {data.map((value) => {
          return (
            <Animated.View key={value} layout={Layout.springify().damping(15).stiffness(100)}>
              <TouchableOpacity
                // NOTE: on IOS simulator onPress is not working
                disabled={disabled}
                onPressIn={() => handleOnPress(value)}
                activeOpacity={0.3}
                className="justify-center items-center mt-3 p-3 rounded-2xl h-[50px] w-[80px] border border-b-4 bg-g"
                style={[
                  selected === value
                    ? {
                        borderColor: theme.opSelectedBg,
                        borderBottomColor: theme.opSelectedBgBottom,
                        backgroundColor: '#b2b6be',
                      }
                    : {
                        borderColor: theme.opBorder,
                        borderBottomColor: theme.opBorderBottom,
                        backgroundColor: theme.opBg,
                      },
                ]}
              >
                <Text className="font-rubik-light" style={{ color: theme.opTxt }}>
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
