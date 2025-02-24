import {Text, View, TextInput} from "react-native"
import React from "react"
import CustomButton from "../components/CustomButton"
// import {useNavigation} from "@react-navigation/native"
// import translate from "../locale/languages"
import {/*useSelector,*/ useDispatch} from "react-redux"
import {setIsLoggedIn} from "../redux/LoggedSlice"
import handleBiometricAuth from "./Biometrics"
import {storage} from "../components/MMKV"

export default function SignIn() {
  const dispatch = useDispatch()
  const LoginWithBiometrics = async () => {
    const Authenticate = await handleBiometricAuth()
    if (Authenticate) {
      dispatch(setIsLoggedIn(true))
    }
  }
  // const navigation = useNavigation()
  // const Language = useSelector(state => state.Language.LanguageName)
  const BiometricsEnabled = storage.getBoolean("BiometricsEnabled")
  return (
    <View className="bg-white w-full h-full  justify-center items-center dark:bg-black">
      <Text testID="page title">Signin</Text>
      <TextInput testID="email" placeholder="email" />
      <TextInput testID="password" placeholder="password" />

      <CustomButton
        testID="login button"
        onPress={() => {
          dispatch(setIsLoggedIn(true))
        }}
        title="Login"
      />
      {BiometricsEnabled && (
        <CustomButton
          testID="login with Biometrics"
          onPress={LoginWithBiometrics}
          title="Login with Biometrics"
        />
      )}
    </View>
  )
}
