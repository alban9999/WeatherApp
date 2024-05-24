import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  WeatherDetails: { data: any };
};

export type StackScreenProps<T extends keyof RootStackParamList = any> = NativeStackScreenProps<RootStackParamList, T>;
