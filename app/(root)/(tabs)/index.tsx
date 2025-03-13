import BottomSheet from '@/components/BottomSheet';
import GridOptions from '@/components/GridOptions';
import usePracticeStore from '@/store/practice';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';

const OPTIONS = ['der', 'die', 'das', 'den', 'dem', 'des'];

export default function Index() {
  const progress = usePracticeStore.use.progress();
  const increment = usePracticeStore.use.increment();
  const setInitialValues = usePracticeStore.use.setInitialValues();
  const [caseArticles, setCaseArticles] = React.useState<string[]>([...OPTIONS]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const router = useRouter();

  const shuffleData = () => {
    const shuffled = [...caseArticles].sort(() => Math.random() - 0.5);
    setCaseArticles(shuffled);
  };

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
      <Link href="/lessons/1">Lesson 1</Link>

      <Button title="Go to Practice" onPress={() => router.push('/practice')} />

      <Text>{progress.definite.current}</Text>
      <Text>{progress.definite.max}</Text>
      <Button title="Increment" onPress={() => increment('definite')} />
      <Button
        title="Reset"
        onPress={() =>
          setInitialValues({ ...progress, definite: { current: 0, max: progress.definite.max } })
        }
      />
      {/* <ProgressBar /> */}
      <GridOptions selectedIdx={selectedIndex} data={caseArticles} onPress={setSelectedIndex} />
      {/* <ShuffleButtons></ShuffleButtons> */}

      <TouchableOpacity
        onPress={shuffleData}
        style={{
          marginTop: 30,
          height: 40,
          width: 80,
          backgroundColor: 'lightblue',
          borderRadius: 10,
        }}
      >
        <Text style={{ color: 'black', fontSize: 16 }}>Shuffle</Text>
      </TouchableOpacity>

      <BottomSheet
        shouldShow={cond}
        isCorrect={progress.definite.current === 3 ? true : false}
        text="dem"
      />
    </View>
  );
}
