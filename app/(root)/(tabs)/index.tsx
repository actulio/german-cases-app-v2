import { Exercise, PracticeListItem } from '@/components/shared/PracticeListItem';
import { useTheme } from '@/hooks/useTheme';
import usePracticeStore from '@/store/practice';
import { useRouter } from 'expo-router';

import React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';

const exercisesBase: Partial<Exercise>[] = [
  {
    title: 'Definite Article',
    description: 'Learn when to use "der," "die," and "das"',
    path: 'definite',
    icon: 'Book',
  },
  {
    title: 'Indefinite Article',
    path: 'indefinite',
    description: 'Understand "ein" and "eine" in different contexts.',
    icon: 'BookA',
  },
] as const;

const HomeScreen = () => {
  const router = useRouter();
  const { colors } = useTheme();

  const progress = usePracticeStore.use.progress();

  const exercises: Exercise[] = exercisesBase.map(
    (exercise, idx) =>
      ({
        ...exercise,
        id: idx.toString(),
        progress: progress[exercise.path as 'definite' | 'indefinite'],
        color: colors['--color-primary-500'],
      }) as Exercise,
  );

  const handleLessonPress = (lesson: Exercise) => {
    router.push(`/articles/${lesson.path}`);
  };

  const renderLessonItem = ({ item }: { item: Exercise }) => (
    <PracticeListItem item={item} onPress={handleLessonPress} />
  );

  return (
    <SafeAreaView className="flex-1 bg-background-primary ">
      <View className="items-center py-5 mt-5">
        <Text className="text-text-primary text-2xl font-rubik-bold">List of exercises:</Text>
      </View>
      <FlatList
        data={exercises}
        renderItem={renderLessonItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
