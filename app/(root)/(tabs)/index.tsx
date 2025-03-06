import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Index() {
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
      <Link href="/practice">Practice</Link>
      <Link href="/learn">Learn</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/lessons/1">Lesson 1</Link>
    </View>
  );
}
