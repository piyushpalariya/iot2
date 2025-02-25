import { View, ActivityIndicator } from "react-native";
import React from "react";

export default function SplashScreen() {
  return (
    <View
      testID="splashscreen"
      className="h-full w-full justify-center items-center bg-white">
      {/*<Image source={require("./ic_launcher.png")} style={styles.logo} />*/}
      <ActivityIndicator testID="loading" />
    </View>
  );
}
