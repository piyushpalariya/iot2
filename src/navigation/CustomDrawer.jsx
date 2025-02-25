import { View } from "react-native";
import React from "react";
import HomeIcon from "../components/icons/HomeIcon";
// import {useSelector} from "react-redux"
// import translate from "../locale/languages"
import CustomDrawerItem from "./CustomDrawerItem";
import SettingsIcon from "../components/icons/SettingsIcon";
import propTypes from "prop-types";

CustomDrawer.propTypes = {
  navigation: propTypes.object.isRequired,
};

export default function CustomDrawer({ navigation }) {
  //const Language = useSelector(state => state.Language.LanguageName)
  return (
    <View className=" bg-white  justify-start items-start w-full h-full">
      <CustomDrawerItem
        Icon={HomeIcon}
        title="home"
        onPress={() => {
          navigation.navigate("home");
        }}
      />
      <CustomDrawerItem
        Icon={SettingsIcon}
        title="settings"
        onPress={() => {
          navigation.navigate("settings");
        }}
      />
    </View>
  );
}
