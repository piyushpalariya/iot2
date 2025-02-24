import "../gesture-handler"
import "../global.css"
import React from "react"
import Drawer from "./navigation/Drawer"
import {useDispatch} from "react-redux"
import {useNavigation} from "@react-navigation/native"
import {storage} from "./components/MMKV"
import {changeLanguage} from "./redux/LanguageSlice"
import messaging from "@react-native-firebase/messaging"

export default function Main() {
  const language = storage.getString("language")
  const dispatch = useDispatch()
  dispatch(changeLanguage(language))

  const navigation = useNavigation()
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    if (remoteMessage.data.screen) {
      console.log(remoteMessage.data.screen)
      navigation.navigate(remoteMessage.data.screen)
    }
  })

  return <Drawer />
}
