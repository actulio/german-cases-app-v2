import { useNavigation } from 'expo-router';

export const useFindNavigationParam = (param: string) => {
  const navigation = useNavigation();
  const state = navigation.getState();

  const index = state?.index;
  if (!index) return '';

  const route = state?.routes[index];
  if (!route) return '';

  return route.params ? (route.params as Record<string, string>)[param] : '';
};
