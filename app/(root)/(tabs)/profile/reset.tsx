import { Accordion } from '@/components/shared/Accordion';
import usePracticeStore from '@/store/practice';
import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';

// Define types for our reset options
type ResetOption = {
  label: string;
  action: () => void;
};

type ResetCategory = {
  title: string;
  options: ResetOption[];
};

const ResetScreen = () => {
  // Define all reset options with their actions
  const restartProgress = usePracticeStore.use.restart();
  const resetProgress = usePracticeStore.use.reset();

  const resetOptions: Record<string, ResetCategory[]> = {
    Articles: [
      {
        title: 'Definite',
        options: [
          {
            label: 'Current',
            action: () =>
              showConfirmation('Reset current progress for definite articles?', () =>
                restartProgress('definite'),
              ),
          },
          {
            label: 'Maximum',
            action: () =>
              showConfirmation('Reset all progress for definite articles?', () =>
                resetProgress('definite'),
              ),
          },
        ],
      },
      {
        title: 'Indefinite',
        options: [
          {
            label: 'Current',
            action: () =>
              showConfirmation('Reset current progress for indefinite articles?', () =>
                restartProgress('indefinite'),
              ),
          },
          {
            label: 'Maximum',
            action: () =>
              showConfirmation('Reset all progress for indefinite articles?', () =>
                resetProgress('indefinite'),
              ),
          },
        ],
      },
    ],
  };

  const showConfirmation = (message: string, onConfirm: () => void) => {
    Alert.alert(
      'Confirm Reset',
      message,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: onConfirm,
        },
      ],
      { cancelable: true },
    );
  };

  return (
    <View className="flex-1 p-4 bg-background-primary">
      {Object.entries(resetOptions).map(([exercise, categories]) => (
        <View key={exercise} className="p-4">
          <Text className="text-xl font-semibold mb-3 text-text-primary">{exercise}:</Text>
          <View className="px-2">
            {categories.map((category) => (
              <Accordion key={`${exercise}-${category.title}`} title={category.title}>
                <View className="mx-4">
                  {category.options.map((option) => (
                    <TouchableOpacity
                      key={option.label}
                      className="py-3 px-4"
                      onPress={option.action}
                    >
                      <Text className="underline text-text-primary">{option.label}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </Accordion>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};

export default ResetScreen;
