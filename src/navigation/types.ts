import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

export const useAppNavigation = useNavigation<
  StackNavigationProp<RootStackParamList>
>;
