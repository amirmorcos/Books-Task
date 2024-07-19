import { useTheme } from "@react-navigation/native";
import { AppTheme } from "themes/colors/types";

export const useAppTheme = () => {
  const { colors } = useTheme() as AppTheme;
  return { colors };
};
