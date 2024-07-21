import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Book } from "models/Book";

export type MainStackParamList = {
  HomeStack: undefined;
  FavoritesStack: undefined;
};
export type RootStackParamList = {
  Home: undefined;
  Details: { item: Book };
  Search: undefined;
};

export type FavoritesStackParamList = {
  Favorites: undefined;
  Details: { item: Book };
};

export const useAppNavigation = useNavigation<
  StackNavigationProp<RootStackParamList>
>;

export const useAppRoute = useRoute<RouteProp<RootStackParamList, "Details">>;
