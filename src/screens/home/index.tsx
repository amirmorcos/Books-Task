import { Button } from "atoms/index";
import SearchInput from "molecules/SearchInput";
import React from "react";
import { View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "white" }}>
      <Button disabled label="Button" onPress={() => {}} />
      <SearchInput
        onSearch={() => {}}
        overrideContainerStyle={{ marginTop: 20 }}
      />
    </View>
  );
};

export default HomeScreen;
