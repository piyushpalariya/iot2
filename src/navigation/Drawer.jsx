import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useState } from "react";

import Settings from "../screens/Settings";
import Stack from "./Stack";

import SearchButton from "../components/SearchButton";
import SearchScreen from "../components/SearchScreen";

import SettingsIcon from "../components/icons/SettingsIcon";
import HomeIcon from "../components/icons/HomeIcon";
import SplashScreen from "../components/SplashScreen";
import { useSelector } from "react-redux";
import translate from "../locale/languages";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import CustomDrawer from "./CustomDrawer";
//import SearchIcon from "../components/icons/SearchIcon"

export default function Drawer() {
  const Language = useSelector((state) => state.Language.LanguageName);
  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);

  const [Loading, setIsLoading] = useState(false);
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);
  const DrawerNavigator = createDrawerNavigator();
  if (Loading) {
    return (
      <DrawerNavigator.Navigator>
        <DrawerNavigator.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            drawerItemStyle: { display: "none" },
            headerShown: false,
            swipeEnabled: false,
          }}
        />
      </DrawerNavigator.Navigator>
    );
  }
  if (!isLoggedIn) {
    return (
      <DrawerNavigator.Navigator
        screenOptions={{
          swipeEnabled: false,
          drawerItemStyle: { display: "none" },
          headerShown: false,
        }}>
        <DrawerNavigator.Screen name="SignIn" component={SignIn} />
        <DrawerNavigator.Screen name="SignUp" component={SignUp} />
      </DrawerNavigator.Navigator>
    );
  } else {
    return (
      <DrawerNavigator.Navigator
        drawerContent={CustomDrawer}
        backBehavior="history"
        initialRouteName="home"
        screenOptions={{
          drawerActiveTintColor: "red",
          drawerActiveBackgroundColor: "pink",
          drawerInactiveTintColor: "blue",
          drawerLabelStyle: {
            fontSize: 15,
          },
          headerShown: true,
          drawerStyle: {
            backgroundColor: "#f2f1ed",
            width: "75%",
          },
          headerTintColor: "red",
          headerTitleAlign: "center",
          headerTransparent: true,
        }}>
        <DrawerNavigator.Screen
          name="home"
          component={Stack}
          options={{
            drawerIcon: HomeIcon,
            headerRight: SearchButton,
            title: translate("home", Language),
          }}
        />

        <DrawerNavigator.Screen
          name="settings"
          component={Settings}
          options={{
            drawerIcon: SettingsIcon,
            title: translate("settings", Language),
          }}
        />
        <DrawerNavigator.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            drawerItemStyle: { display: "none" },
            headerShown: false,
          }}
        />
      </DrawerNavigator.Navigator>
    );
  }
}
