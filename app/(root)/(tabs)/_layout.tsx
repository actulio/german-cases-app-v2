import { useTheme } from '@/hooks/useTheme';
import { Tabs } from 'expo-router';
import { BookOpenCheck, NotebookPen, UserRoundCog } from 'lucide-react-native';
import { Text, View } from 'react-native';

// notebook-pen
// user-round-cog
// book-open-check

const icons = {
  practice: NotebookPen,
  learn: BookOpenCheck,
  profile: UserRoundCog,
};

const TabIcon = ({
  focused,
  iconName,
  title,
}: {
  focused: boolean;
  iconName: 'practice' | 'learn' | 'profile';
  title: string;
}) => {
  const Icon = icons[iconName];
  const { colors } = useTheme();

  return (
    <View className="flex-1 mt-3 flex flex-col items-center">
      <Icon
        size={focused ? 18 : 24}
        color={focused ? colors['--color-primary-500'] : colors['--color-text-inactive']}
      />
      {focused && (
        <Text className="text-primary-300 font-rubik-medium text-xs w-full text-center mt-1">
          {title}
        </Text>
      )}
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarBackground: () => <View className="bg-background-primary flex-1"></View>,
        tabBarStyle: {
          // position: 'absolute',
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Practice',
          headerShown: false,
          animation: 'shift',
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconName="practice" title="Practice" />
          ),
        }}
      />
      <Tabs.Screen
        name="learn"
        options={{
          title: 'Learn',
          headerShown: false,
          animation: 'shift',
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} iconName="learn" title="Learn" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          animation: 'shift',
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconName="profile" title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
