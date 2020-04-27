import react, { useEffect } from "react";
import { useGlobalState } from "_globalState";
import { PermissionsAndroid, Platform, Alert } from "react-native";
import { t } from "_i18n";
import { requestLocationPermission } from "_utils";
import Geolocation from "react-native-geolocation-service";

async function getPosition(callback) {
  const android = Platform.OS === "android";
  let alreadyGranted = false;
  if (android) {
    alreadyGranted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );
  }
  console.log(alreadyGranted);
  if (!alreadyGranted && android) {
    requestLocationPermission();
  } else {
    console.log("getting positing");
    await Geolocation.getCurrentPosition(
      pos => {
        callback(pos);
      },
      error => {
        // See error code charts below.
        Alert.alert(
          t("position.title"),
          t("position.failMsg"),
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
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }
}

export default getPosition;
