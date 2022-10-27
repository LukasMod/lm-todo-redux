import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  HomeScreen: undefined;
  CreateScreen: undefined;
};

export type HomeScreenNavProp = NativeStackScreenProps<
  RootStackParamList,
  'HomeScreen'
>;
