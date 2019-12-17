import { PermissionsAndroid, Platform } from "react-native";
import { t } from "_i18n";
async function requestLocationPermission() {
  if (Platform.OS === "android") {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: `${t("appName")} Location Permission`,
          message: `${t("appName")} needs access to your location `,
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
        return true;
      } else {
        console.log("Camera permission denied");
        return false;
      }
    } catch (err) {
      Alert.alert(
        `${t("appName")} Location Permission`,
        `${t("appName")} falied to grant Location Permission`,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => requestLocationPermission() }
        ],
        { cancelable: false }
      );
      console.warn(err);
    }
  }
}

export default requestLocationPermission;
