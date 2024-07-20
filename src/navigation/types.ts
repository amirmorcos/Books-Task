import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Book } from "models/Book";

export type RootStackParamList = {
  Home: undefined;
  Details: { item: Book };
};

export const useAppNavigation = useNavigation<
  StackNavigationProp<RootStackParamList>
>;

export const useAppRoute = useRoute<RouteProp<RootStackParamList, "Details">>;
