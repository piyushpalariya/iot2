import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import propTypes from "prop-types";

export default function CustomDrawerItem({ Icon, title, onPress }) {
  return (
    <View className="w-full ">
      <TouchableOpacity
        className="p-3 rounded-[25] m-1 bg-pink-400  justify-start items-center flex-row  dark:bg-yellow-200 "
        onPress={onPress}>
        <Icon />
        <Text className="ml-5">{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

CustomDrawerItem.propTypes = {
  Icon: propTypes.elementType.isRequired,
  title: propTypes.string.isRequired,
  onPress: propTypes.func.isRequired,
};
