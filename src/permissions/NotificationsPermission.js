import { PermissionsAndroid } from "react-native";

export const NotificationsPermission = async () => {
  try {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      {
        title: "App notifications Permission",
        message: "App needs access to your notifications ",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      },
    );
    // if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //   console.log("You can use the notifications")
    // } else {
    //   console.log("notifications permission denied")
    // }
  } catch (err) {
    console.warn(err);
  }
};
