import {View, TextInput} from "react-native"
import React from "react"

export default function SearchScreen() {
  return (
    <View>
      <TextInput placeholder="Search" autoFocus={true} />
    </View>
  )
}
