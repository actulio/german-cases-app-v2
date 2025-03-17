import ProgressBar from '@/components/shared/ProgressBar';
import { useFindNavigationParam } from '@/hooks/useFindNavigationParam';
import usePracticeStore from '@/store/practice';
import React from 'react';
import { Dimensions, View } from 'react-native';

const ProgressHeader = () => {
  const param = useFindNavigationParam('id');
  const progress = usePracticeStore.use.progress();
  const stats = progress[param as 'definite' | 'indefinite'];
  const { width: deviceWidth } = Dimensions.get('window');

  return (
    <View className="flex" style={{ width: deviceWidth - 80 }}>
      {stats && <ProgressBar stats={stats} />}
    </View>
  );
};

export default ProgressHeader;
