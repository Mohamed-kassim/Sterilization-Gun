import { PermissionsAndroid, Platform, Alert } from "react-native";
import { t } from "_i18n";
async function requestLocationPermission() {
  console.log('3 permission')
  if (Platform.OS === "android") {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: t("permissions.location.title"),
          message: t("permissions.location.requireMsg"),
          buttonNeutral: t("buttons.neutral"),
          buttonNegative: t("buttons.negative"),
          buttonPositive: t("buttons.positive")
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the Location");
        return true;
      } else {
        console.log("Location permission denied");
        return false;
      }
    } catch (err) {
      Alert.alert(
        t("permissions.location.title"),
        t("permissions.location.failMsg"),
        [
          {
            text: t("buttons.negative"),
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          {
            text: t("buttons.positive"),
            onPress: () => requestLocationPermission()
          }
        ],
        { cancelable: false }
      );
      console.warn(err);
    }
  }
}

export default requestLocationPermission;
