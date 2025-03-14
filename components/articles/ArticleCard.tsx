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
    <View
      className="w-[250px] h-[200px] translate-y-[-80px] rounded-2xl mb-2 p-5 items-center justify-center shadow-lg bg-primary-500 "
      // style={{
      //   shadowColor: '#000',
      //   shadowOffset: { width: 0, height: 10 },
      //   shadowOpacity: 0.2,
      //   shadowRadius: 15,
      //   elevation: 10,
      // }}
    >
      <Text className="text-3xl capitalize font-rubik-medium text-text-active">{gCase}</Text>
      <Text className="text-2xl capitalize font-rubik-medium text-primary-700">{gender}</Text>
      <View
        className={`${choice ? 'bg-transparent' : 'bg-primary-300'} items-center justify-center mt-4 h-10 w-20`}
      >
        <Text className="text-white text-2xl font-rubik">{choice}</Text>
      </View>
    </View>
  );
};

export default ArticleCard;
