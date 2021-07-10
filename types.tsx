/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { StyleProp } from "react-native";

export type RootStackParamList = {
  Home: undefined;
  Allocation:{seatArray:string,noOfPassengers:string};
};

export type TextInputProps = {
  placeholder?: string;
  value?: string | undefined;
  error?: string;
  label?: string;
  onChangeText: Function;
  onSubmitEditing?: undefined;
  style?: StyleProp<any>;
};

export type ButtonProps = {
  title: string;
  onPress: Function;
  style?: StyleProp<any>;
  isDisabled?: boolean;
};
