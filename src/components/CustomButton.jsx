import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import PropTypes from "prop-types";

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  testID: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default function CustomButton({ title, testID, onPress, className }) {
  return (
    <View testID={testID} className={className}>
      <TouchableOpacity onPress={onPress}>
        <Text className="text-center">{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
