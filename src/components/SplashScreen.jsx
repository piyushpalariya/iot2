import {StyleSheet, View, Image, ActivityIndicator} from "react-native"
import React from "react"

export default function SplashScreen() {
  return (
    <View testID="splashscreen" style={styles.view}>
      <Image source={require("./ic_launcher.png")} style={styles.logo} />
      <ActivityIndicator testID="loading" />
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    height: 300,
    width: 300,
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
})
