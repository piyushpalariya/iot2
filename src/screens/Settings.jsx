import {Text, View, Switch} from "react-native"
import React, {useState} from "react"
import {storage} from "../components/MMKV"
import {useColorScheme} from "nativewind"
import {useSelector, useDispatch} from "react-redux"
import {changeLanguage} from "../redux/LanguageSlice"
import translate from "../locale/languages"

export default function Settings() {
  const SensorAvailable = storage.getBoolean("Sensor Available")

  const [BiometricsEnabled, ChangeBiometricsEnabled] = useState(
    storage.getBoolean("BiometricsEnabled"),
  )
  const ChangeBiometricState = () => {
    if (BiometricsEnabled) {
      storage.set("BiometricsEnabled", false)
      ChangeBiometricsEnabled(false)
    } else {
      storage.set("BiometricsEnabled", true)
      ChangeBiometricsEnabled(true)
    }
  }

  const Language = useSelector(state => state.Language.LanguageName)
  const dispatch = useDispatch()
  const {colorScheme, toggleColorScheme} = useColorScheme()
  const changeMode = () => {
    toggleColorScheme()
    const ColorScheme = colorScheme === "dark" ? "light" : "dark"
    storage.set("ColorScheme", ColorScheme)
  }

  const changeLanguageHindi = () => {
    dispatch(changeLanguage("Hi"))
    storage.set("language", "Hi")
  }
  const changeLanguageEnglish = () => {
    dispatch(changeLanguage("En"))
    storage.set("language", "En")
  }
  return (
    <View className="bg-white w-full h-full justify-center items-center dark:bg-black">
      <Text> {translate("dark mode", Language)}</Text>
      <Switch
        onChange={changeMode}
        thumbColor="red"
        value={colorScheme === "dark" ? true : false}
      />
      <Text>{translate("hindi")}</Text>
      <Switch
        onChange={changeLanguageHindi}
        thumbColor="red"
        value={Language === "Hi" ? true : false}
      />

      <Text>{translate("english", Language)}</Text>
      <Switch
        onChange={changeLanguageEnglish}
        thumbColor="red"
        value={Language === "En" ? true : false}
      />
      {SensorAvailable && (
        <View className="justify-center items-center">
          <Text>enable biometrics</Text>
          <Switch
            onChange={ChangeBiometricState}
            thumbColor="red"
            value={BiometricsEnabled ? true : false}
          />
        </View>
      )}
    </View>
  )
}
