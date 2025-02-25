import { View, ToastAndroid } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Animated from "react-native-reanimated";
//import {useSharedValue, withSpring, withTiming} from "react-native-reanimated"
import CustomButton from "../components/CustomButton";

import { useSelector } from "react-redux";

import { addEventListener } from "@react-native-community/netinfo";
import translate from "../locale/languages";

addEventListener((state) => {
  const isConnected = state.isConnected;
  const NetworkType = state.type;
  if (isConnected && NetworkType === "wifi") {
    ToastAndroid.showWithGravity(
      "please connect to cellular network",
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
  } else if (!isConnected) {
    ToastAndroid.show("please connect to network", ToastAndroid.SHORT);
  }
});

// const handlePress = () => {
//   width.value = withTiming(toValue:100,()=>{})
// }

export default function One() {
  const Language = useSelector((state) => state.Language.LanguageName);

  const navigation = useNavigation();
  //const width = useSharedValue(100)

  return (
    <View className="bg-white w-full h-full  justify-center items-center dark:bg-[#0a0a0a]">
      <Animated.View className="color-black" />

      <CustomButton
        testID="nav"
        title={translate("click me", Language)}
        onPress={() => {
          navigation.navigate("Two");
        }}
      />
    </View>
  );
}
