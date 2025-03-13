import { ThemeContext } from '@/context/themeContext';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Animated, { Layout } from 'react-native-reanimated';

interface Props {
  data: string[];
  selectedIdx: number;
  selected: string;
  onPress: (idx: number) => void;
}

const GridOptions = (props: Props) => {
  const { data, selectedIdx, onPress } = props;
  const { theme } = React.useContext(ThemeContext);

  const handleOnPress = (index: number) => {
    const idx = selectedIdx !== index ? index : -1;
    onPress(idx);
  };

  console.log(selectedIdx);

  return (
    <View className="flex items-center justify-center">
      <View className="flex flex-row flex-wrap justify-around top-0 w-[300px] ">
        {data.map((value, index) => {
          return (
            <Animated.View key={value} layout={Layout.springify().damping(15).stiffness(100)}>
              <TouchableOpacity
                // NOTE: on IOS simulator onPress is not working
                onPressIn={() => handleOnPress(index)}
                activeOpacity={0.3}
                className="justify-center items-center mt-3 p-3 rounded-2xl h-[50px] w-[80px] border border-b-4"
                style={[
                  selectedIdx === index
                    ? {
                        borderColor: theme.opSelectedBg,
                        borderBottomColor: theme.opSelectedBgBottom,
                        backgroundColor: 'red',
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
