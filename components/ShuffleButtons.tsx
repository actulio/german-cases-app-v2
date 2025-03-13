import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Animated, { Layout } from 'react-native-reanimated';

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

const ShuffleButtons = () => {
  const [data, setData] = useState(options);

  const shuffleArray = () => {
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    setData(shuffled);
  };

  return (
    <View
      style={{
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FlatList
        data={data}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Animated.View
            layout={Layout.springify().damping(15).stiffness(100)}
            style={{
              marginTop: 5,
              backgroundColor: 'lightblue',
              borderRadius: 10,
              width: 200,
              alignItems: 'center',
            }}
          >
            <Text>{item}</Text>
          </Animated.View>
        )}
      />
      <TouchableOpacity
        onPress={shuffleArray}
        style={{
          padding: 15,
          backgroundColor: 'blue',
          borderRadius: 10,
        }}
      >
        <Text style={{ color: 'black', fontSize: 16 }}>Shuffle</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShuffleButtons;
