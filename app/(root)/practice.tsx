import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function PracticeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Practice Screen</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}
