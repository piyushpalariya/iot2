import ReactNativeBiometrics from "react-native-biometrics";

const rnBiometrics = new ReactNativeBiometrics({
  allowDeviceCredentials: true,
});

export default async function handleBiometricAuth() {
  const isSensorAvailable = await rnBiometrics.isSensorAvailable();
  if (isSensorAvailable.available) {
    try {
      const { success, error } = await rnBiometrics.simplePrompt({
        promptMessage: "Authenticate to continue",
      });

      if (success) {
        console.log("[handleBiometricAuth] Success");
        //Alert.alert('Success');
        return true;
      } else {
        console.error("[handleBiometricAuth] Error:", error);
        return false;
      }
    } catch (error) {
      console.error("[handleBiometricAuth] Error:", error);

      return false;
    }
  }
}
