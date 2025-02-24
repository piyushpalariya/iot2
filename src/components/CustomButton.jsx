import {Text, TouchableOpacity, View} from "react-native"
import React from "react"
import PropTypes from "prop-types"

CustomButton.propTypes = {
  // Define prop types
  title: PropTypes.string.isRequired, // title is a required string
  testID: PropTypes.string, // testID is an optional string
  onPress: PropTypes.func.isRequired, // onPress is a required function
}
export default function CustomButton({title, testID, onPress}) {
  return (
    <View
      testID={testID}
      className="bg-yellow-500 rounded-[25] m-1 p-3  items-center justify-center">
      <TouchableOpacity onPress={onPress}>
        <Text className="text-center">{title}</Text>
      </TouchableOpacity>
    </View>
  )
}
