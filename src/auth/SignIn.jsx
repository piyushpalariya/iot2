import { Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
// import {useNavigation} from "@react-navigation/native"
// import translate from "../locale/languages"
import { /*useSelector,*/ useDispatch } from "react-redux";
import { setIsLoggedIn } from "../redux/LoggedSlice";
import handleBiometricAuth from "./Biometrics";
import { storage } from "../components/MMKV";
import { z } from "zod";

const loginSchema = z.object({
  // email: z
  //   .string()
  //   .min(3, "Username must be at least 3 characters")
  //   .max(50, "Username must be at most 50 characters"), // Example constraints
  password: z
    .string()
    .min(2, "Password must be at least 8 characters")
    .max(100, "Password must be at most 100 characters"),
  email: z.string().email("Invalid email format"),
});

const ValidateLogin = (credentials) => {
  try {
    const result = loginSchema.parse(credentials);
    console.log("Login successful:", result);
  } catch (error) {
    return JSON.parse(error);
  }
};

export default function SignIn() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [Error, setError] = useState("");

  const dispatch = useDispatch();
  const LoginWithBiometrics = async () => {
    const Authenticate = await handleBiometricAuth();
    if (Authenticate) {
      dispatch(setIsLoggedIn(true));
    }
  };
  // const Language = useSelector(state => state.Language.LanguageName)
  const BiometricsEnabled = storage.getBoolean("BiometricsEnabled");
  return (
    <View className="bg-[#f7f5f5] w-full h-full  justify-start items-center dark:bg-[#0a0a0a]">
      <Text className="mt-20 text-2xl" testID="page title">
        LOGIN
      </Text>
      <View className="bg-[#d1d8de] mt-16 w-[75%] h-[40%] justify-start items-center rounded-[25]">
        <TextInput
          className="mt-20"
          testID="email"
          placeholder="email"
          value={email}
          onChangeText={setEmail}
        />
        {Error && <Text>{Error?.[0]?.message || ""}</Text>}
        <TextInput
          testID="password"
          placeholder="password"
          value={password}
          onChangeText={setPassword}
        />
        {Error && <Text>{Error?.[1]?.message || ""}</Text>}
        <CustomButton
          className="mt-8 bg-yellow-500 rounded-[25] m-1 p-3  items-center justify-center"
          testID="login button"
          onPress={() => {
            dispatch(setIsLoggedIn(true));
            const result = ValidateLogin({ email, password });
            setError(result);
          }}
          title="Login"
        />
      </View>

      {BiometricsEnabled && (
        <CustomButton
          testID="login with Biometrics"
          onPress={LoginWithBiometrics}
          title="Login with Biometrics"
        />
      )}
    </View>
  );
}
