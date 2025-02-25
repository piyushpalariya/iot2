import SearchIcon from "./icons/SearchIcon";
import { View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function SearchButton() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SearchScreen");
        }}>
        <SearchIcon />
      </TouchableOpacity>
    </View>
  );
}
