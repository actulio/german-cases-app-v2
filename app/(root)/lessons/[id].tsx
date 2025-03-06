import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

//FIXME: this is probably not a [id]able page. Need to think of something else

const LessonDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>LessonDetails {id}</Text>
    </View>
  );
};

export default LessonDetails;
