import { IconName, Icons } from '@/constants/icons';
import { Text, TouchableOpacity, View } from 'react-native';

export type Exercise = {
  id: string;
  path: string;
  title: string;
  description: string;
  progress: { current: number; max: number };
  icon: IconName;
  color: string;
};

type PracticeListItemProps = {
  item: Exercise;
  onPress: (exercise: Exercise) => void;
};

export const PracticeListItem = ({ item, onPress }: PracticeListItemProps) => {
  const { progress } = item;
  const Icon = Icons[item.icon];

  return (
    <TouchableOpacity
      className="flex flex-row items-center p-4 rounded-3xl mb-4"
      style={{ backgroundColor: item.color }}
      onPress={() => onPress(item)}
      activeOpacity={0.8}
    >
      <View className="mr-3 justify-center items-center rounded-full w-[60px] h-[60px] bg-white/30">
        <Icon size={30} className="text-text-active" />
      </View>

      <View className="flex-1 gap-1">
        <Text className="text-xl font-rubik-bold mb-1 text-text-active">{item.title}</Text>
        <Text className="text-md font-rubik-medium text-secondary-500 mb-2">
          {item.description}
        </Text>
        <View className="h-1 text-sm bg-text-inactive opacity-90">
          <View
            className="h-[100%] bg-success-500 rounded-md "
            style={{ width: `${progress.current ? (progress.max / progress.current) * 100 : 0}%` }}
          />
        </View>
      </View>

      <View className="px-3 py-2 ml-3 rounded-2xl bg-text-active">
        <Text className="font-rubik-bold text-success-700">
          {item.progress.max === 0 ? 'Start' : 'Continue'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
