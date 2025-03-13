import ArticleCard from '@/components/articles/ArticleCard';
import BottomSheet from '@/components/articles/BottomSheet';
import ContinueButton from '@/components/articles/ContinueButton';
import GridOptions from '@/components/articles/GridOptions';
import { ALL_ARTICLES, ARTICLE_OPTIONS, ArticleType, CASES, GENDERS } from '@/constants/articles';
import usePracticeStore from '@/store/practice';

import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';

const getRandomOption = () => {
  const randomCaseIdx = Math.floor(Math.random() * CASES.length);
  const randomGenderIdx = Math.floor(Math.random() * GENDERS.length);

  return { gCase: CASES[randomCaseIdx], gender: GENDERS[randomGenderIdx] };
};

const ArticleExercises = () => {
  const { id } = useLocalSearchParams<{ id: ArticleType }>();
  const [articlesToShuffle, setArticlesToShuffle] = useState<string[]>([...ARTICLE_OPTIONS[id]]);
  const [selected, setSelected] = useState('');
  const [randomOption, setRandomOption] = useState(getRandomOption());
  const [isSubmitted, setIsSubmitted] = useState(false);
  const incrementProgress = usePracticeStore.use.increment();
  const resetProgress = usePracticeStore.use.reset();

  const isCorrect =
    isSubmitted && ALL_ARTICLES[id][randomOption.gCase][randomOption.gender] === selected;

  const shuffleData = () => {
    const shuffled = [...articlesToShuffle].sort(() => Math.random() - 0.5);
    setArticlesToShuffle(shuffled);
    setRandomOption(getRandomOption());
  };

  const handleOnAnswer = () => {
    if (!isSubmitted) {
      setIsSubmitted(true);
      return;
    }

    if (isCorrect) incrementProgress(id);
    else resetProgress(id);

    setSelected('');
    shuffleData();
    setIsSubmitted(false);
  };

  return (
    <View className="flex-1 justify-center items-center bg-red-100 ">
      <ArticleCard choice={selected} gCase={randomOption.gCase} gender={randomOption.gender} />

      <GridOptions
        selected={selected}
        disabled={isSubmitted}
        data={articlesToShuffle}
        onPress={setSelected}
      />

      <ContinueButton
        hasSelection={selected !== ''}
        isSubmitted={isSubmitted}
        isCorrect={isCorrect}
        onPress={handleOnAnswer}
      />

      <BottomSheet
        isCorrect={isCorrect}
        shouldShow={isSubmitted}
        text={ALL_ARTICLES[id][randomOption.gCase][randomOption.gender]}
      />
    </View>
  );
};

export default ArticleExercises;
