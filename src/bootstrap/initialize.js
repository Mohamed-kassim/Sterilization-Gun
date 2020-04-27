// import { useState } from "react";
import { setI18nConfig } from "_i18n";
import * as RNLocalize from "react-native-localize";
import { requestLocationPermission } from "_utils";
// const [, updateState] = useState();
// const forceUpdate = useCallback(() => updateState({}), []);

handleLocalizationChange = () => {
  setI18nConfig();
  // forceUpdate();
};
const initializeApp = () => {
  console.log("1 init app");
  setI18nConfig();
  RNLocalize.addEventListener("change", handleLocalizationChange);
  requestLocationPermission();
};

const cleanApp = () => {
  RNLocalize.removeEventListener("change", handleLocalizationChange);
};

export { initializeApp, cleanApp };
