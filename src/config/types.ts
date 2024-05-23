import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Profile: { name: string };
};

export type StackScreenProps<T extends keyof RootStackParamList = any> = NativeStackScreenProps<RootStackParamList, T>;
