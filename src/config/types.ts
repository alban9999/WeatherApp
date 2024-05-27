import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  DetailedWeather: { data: any, city: any };
  NotFound: { errorMsg: any };
};

export type StackScreenProps<T extends keyof RootStackParamList = any> = NativeStackScreenProps<RootStackParamList, T>;
