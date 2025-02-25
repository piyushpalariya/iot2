/**
 * @format
 */
import { AppRegistry } from "react-native";
import Main from "./src/Main";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import store from "./src/redux/store";
import { getToken, RefreshedToken } from "./src/FCM";
import { useEffect } from "react";
import { NotificationsPermission } from "./src/permissions/NotificationsPermission";
import { useColorScheme } from "nativewind";
import { storage } from "./src/components/MMKV";
import ReactNativeBiometrics from "react-native-biometrics";
import React from "react";

const rnBiometrics = new ReactNativeBiometrics({
  allowDeviceCredentials: true,
});

function App() {
  const { setColorScheme } = useColorScheme();
  const ColorScheme = storage.getString("ColorScheme");
  setColorScheme(ColorScheme);

  useEffect(() => {
    async function checkSensor() {
      const result = await rnBiometrics.isSensorAvailable();
      result.available
        ? storage.set("Sensor Available", true)
        : storage.set("Sensor Available", false);
    }
    checkSensor();

    getToken();
    NotificationsPermission();
    RefreshedToken();
  });
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => App);
