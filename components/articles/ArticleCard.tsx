import { CaseOption, GenderOption } from '@/constants/articles';
import React from 'react';
import { Text, View } from 'react-native';

interface Props {
  gCase: CaseOption; //NOTE: case is a reserved word, so gCase is used instead
  gender: GenderOption;
  choice: string;
}

const ArticleCard = ({ gCase, gender, choice }: Props) => {
  return (
    <View className="w-[250px] h-[200px] translate-y-[-80px] rounded-2xl mb-2 p-5 elevation-lg items-center justify-center shadow-lg bg-primary-500">
      <Text className="text-3xl capitalize font-rubik-medium text-white">{gCase}</Text>
      <Text className="text-2xl capitalize font-rubik-medium text-primary-900">{gender}</Text>
      <View
        className={`${choice ? 'bg-transparent' : 'bg-primary-300'} items-center justify-center mt-4 h-10 w-20`}
      >
        <Text className="text-white text-2xl font-rubik">{choice}</Text>
      </View>
    </View>
  );
};

export default ArticleCard;
