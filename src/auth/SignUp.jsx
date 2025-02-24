import {Text, View, TextInput} from "react-native"
import React from "react"
import CustomButton from "../components/CustomButton"
import {useNavigation} from "@react-navigation/native"

export default function SignUp() {
  const navigation = useNavigation()
  return (
    <View testID="login screen" className="bg-white w-full h-full  justify-center items-center dark:bg-black">
      <Text testID="page title">SignUp</Text>
      <TextInput testID="first name" placeholder="first name" />
      <TextInput testID="last name"placeholder="last name" />
      <TextInput testID="email" placeholder="email" />
      <TextInput testID="mobile" placeholder="mobile number" />
      <CustomButton
        testID="signup button"
        title="signup"
        onPress={() => {
          navigation.navigate("SignIn")
        }}
      />
    </View>
  )
}
