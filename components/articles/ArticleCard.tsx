import { CaseOption, GenderOption } from '@/constants/articles';
import { ThemeContext } from '@/context/themeContext';
import React from 'react';
import { Text, View } from 'react-native';

interface Props {
  gCase: CaseOption; //NOTE: case is a reserved word, so gCase is used instead
  gender: GenderOption;
  choice: string;
}

const ArticleCard = ({ gCase, gender, choice }: Props) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <View
      className="w-[250px] h-[200px] translate-y-[-80px] rounded-2xl mb-2 p-5 elevation-lg items-center justify-center shadow-lg "
      style={{ backgroundColor: theme.cardBg }}
    >
      <Text className="text-3xl capitalize font-rubik-medium" style={{ color: theme.cardCase }}>
        {gCase}
      </Text>
      <Text className="text-2xl capitalize font-rubik-medium" style={{ color: theme.cardGender }}>
        {gender}
      </Text>
      <View
        className="items-center justify-center mt-4 h-10 w-20"
        style={[
          {
            backgroundColor: choice === '' ? theme.caseSelection : 'transparent',
          },
        ]}
      >
        <Text className="text-white text-2xl font-rubik">{choice}</Text>
      </View>
    </View>
  );
};

export default ArticleCard;
