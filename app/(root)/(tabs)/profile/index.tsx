import { icons } from '@/constants/icons';
import { useAuthContext } from '@/context/authContext';
import { logout } from '@/lib/appwrite';
import { useRouter } from 'expo-router';
import { ArrowRight, LogOut, LucideIcon } from 'lucide-react-native';
import { Alert, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

interface SettingsItemProp {
  Icon: LucideIcon;
  title: string;
  onPress?: () => void;
  color?: string;
  showArrow?: boolean;
}

const SettingsItem = ({ Icon, title, onPress, color, showArrow = true }: SettingsItemProp) => (
  <TouchableOpacity onPress={onPress} className="flex flex-row items-center justify-between py-3 ">
    <View className="flex flex-row items-center gap-3">
      <Icon className={`${color || 'text-text-primary'} size-6`} />
      <Text className={`${color || 'text-text-primary'} text-md font-rubik-medium `}>{title}</Text>
    </View>

    {showArrow && <ArrowRight className={`${color || 'text-text-primary'} size-5`} />}
  </TouchableOpacity>
);

const Profile = () => {
  const { user, refetch } = useAuthContext();
  const router = useRouter();

  const handleLogout = async () => {
    const result = await logout();
    if (result) {
      Alert.alert('Success', 'Logged out successfully');
      refetch();
    } else {
      Alert.alert('Error', 'Failed to logout');
    }
  };

  return (
    <SafeAreaView className="h-full bg-background-primary">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-32 px-7">
        <View className="flex flex-row items-center justify-between mt-5">
          <Text className="text-xl font-rubik-bold text-text-primary">Profile</Text>
          <icons.Bell className="text-5 text-text-primary" />
        </View>

        <View className="flex flex-row justify-center mt-5">
          <View className="flex flex-col items-center relative mt-5">
            <Image source={{ uri: user?.avatar }} className="size-44 relative rounded-full" />
            <TouchableOpacity className="absolute bottom-11 right-2">
              <icons.Edit className="size-7 text-text-primary" />
            </TouchableOpacity>

            <Text className="text-2xl font-rubik-bold mt-2 text-text-primary">{user?.name}</Text>
          </View>
        </View>

        <View className="flex flex-col mt-10">
          <SettingsItem Icon={icons.Languages} title="App language" />
          <SettingsItem
            Icon={icons.RotateCcw}
            title="Reset progress"
            onPress={() => router.push('/profile/reset')}
          />
        </View>

        <View className="flex flex-col mt-5 border-t border-text-primary pt-5 border-primary-200">
          <SettingsItem
            Icon={icons.Palette}
            title="Theme"
            onPress={() => router.push('/profile/theme')}
          />
        </View>

        <View className="flex flex-col border-t mt-5 pt-5 border-text-primary">
          <SettingsItem
            Icon={LogOut}
            title="Logout"
            color="text-error-500"
            showArrow={false}
            onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
