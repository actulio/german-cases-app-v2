import BottomSheet from '@/components/shared/BottomSheet';
import ProgressBar from '@/components/shared/ProgressBar';
import usePracticeStore from '@/store/practice';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Index() {
  const progress = usePracticeStore.use.progress();
  const increment = usePracticeStore.use.increment();
  const reset = usePracticeStore.use.reset();

  const router = useRouter();

  const cond = progress.definite.current >= 3 && progress.definite.current < 5;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text className="font-bold text-3xl my-10 font-rubik">Welcome to german cases app</Text>
      <Link href="/signIn">Sign in</Link>
      <Link href="/learn">Learn</Link>
      <Link href="/profile">Profile</Link>

      <Button title="Go to Definite" onPress={() => router.push('/articles/definite')} />
      <Button title="Go to indefinite" onPress={() => router.push('/articles/indefinite')} />

      <Text>{progress.definite.current}</Text>
      <Text>{progress.definite.max}</Text>
      <Button title="Increment" onPress={() => increment('definite')} />
      <Button title="Reset" onPress={() => reset('definite')} />
      <View className="w-[300px]">
        <ProgressBar stats={progress.definite} />
      </View>

      <BottomSheet
        shouldShow={cond}
        isCorrect={progress.definite.current === 3 ? true : false}
        text="dem"
      />
    </View>
  );
}
