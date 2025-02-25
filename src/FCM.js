import messaging from "@react-native-firebase/messaging";

const RefreshedToken = () => {
  const unsubscribe = messaging().onTokenRefresh(async (fcmToken) => {
    console.log("FCM Token refreshed:", fcmToken);
    // Send the new token to your server
    //await sendTokenToServer(fcmToken);
  });
  return unsubscribe;
};

const getToken = async () => {
  try {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log("Your Firebase Token is:", fcmToken);
      //await AsyncStorage.setItem('fcmToken', fcmToken); // Store the token
      // TODO: Send the token to your server
      return fcmToken;
    }
  } catch (error) {
    console.log("Error getting token:", error);
  }
};

export { getToken, RefreshedToken };
