import { STORAGE_KEYS } from '@/constants/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import { MMKV } from 'react-native-mmkv';

export type StorageKeys = (typeof STORAGE_KEYS)[number];

const isExpoGo = Constants.appOwnership === 'expo';

export let storage: any;

if (!isExpoGo) {
  storage = new MMKV();
}

// Wrapper functions
export const storageSet = async (key: StorageKeys, value: any) => {
  if (isExpoGo) {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } else {
    storage.set(key, JSON.stringify(value));
  }
};

export const storageGet = async (key: StorageKeys): Promise<any | null> => {
  if (isExpoGo) {
    const result = await AsyncStorage.getItem(key);
    console.log(key, result);
    return result ? JSON.parse(result) : null;
  } else {
    return storage.getString(key) || null;
  }
};

export const storageRemove = async (key: StorageKeys) => {
  if (isExpoGo) {
    await AsyncStorage.removeItem(key);
  } else {
    storage.delete(key);
  }
};
