import {createDrawerNavigator} from "@react-navigation/drawer"
import React, {useState} from "react"

import Settings from "../screens/Settings"
import Stack from "./Stack"

import SearchButton from "../components/SearchButton"
import SearchScreen from "../components/SearchScreen"

import SettingsIcon from "../components/icons/SettingsIcon"
import HomeIcon from "../components/icons/HomeIcon"
import SplashScreen from "../components/SplashScreen"
import {useSelector} from "react-redux"
import translate from "../locale/languages"
import SignIn from "../auth/SignIn"
import SignUp from "../auth/SignUp"

const IconSettings = () => <SettingsIcon />
const IconHome = () => <HomeIcon />
const SearchIcon = () => <SearchButton />

export default function Drawer() {
  const Language = useSelector(state => state.Language.LanguageName)
  const isLoggedIn = useSelector(state => state.isLoggedIn.isLoggedIn)

  const [Loading, setIsLoading] = useState(true)
  setTimeout(() => {
    setIsLoading(false)
  }, 3000)
  const DrawerNavigator = createDrawerNavigator()
  if (Loading) {
    return (
      <DrawerNavigator.Navigator>
        <DrawerNavigator.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            drawerItemStyle: {display: "none"},
            headerShown: false,
          }}
        />
      </DrawerNavigator.Navigator>
    )
  }
  if (!isLoggedIn) {
    return (
      <DrawerNavigator.Navigator>
        <DrawerNavigator.Screen
          name="SignIn"
          component={SignIn}
          options={{
            drawerItemStyle: {display: "none"},
            headerShown: false,
          }}
        />
        <DrawerNavigator.Screen
          name="SignUp"
          component={SignUp}
          options={{
            drawerItemStyle: {display: "none"},
            headerShown: false,
          }}
        />
      </DrawerNavigator.Navigator>
    )
  } else {
    return (
      <DrawerNavigator.Navigator
        backBehavior="history"
        initialRouteName={translate("home", Language)}
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
          name={translate("home", Language)}
          component={Stack}
          options={{
            drawerIcon: IconHome,
            headerRight: SearchIcon,
          }}
        />

        <DrawerNavigator.Screen
          name={translate("settings", Language)}
          component={Settings}
          options={{
            drawerIcon: IconSettings,
          }}
        />
        <DrawerNavigator.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            drawerItemStyle: {display: "none"},
            headerShown: false,
          }}
        />
      </DrawerNavigator.Navigator>
    )
  }
}
