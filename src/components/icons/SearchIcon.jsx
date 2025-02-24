import {View, StyleSheet} from "react-native"
import React from "react"
import Svg, {Path} from "react-native-svg"

export default function SearchIcon() {
  return (
    <View style={styles.icon}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6">
        <Path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {width: 30, height: 30},
})
