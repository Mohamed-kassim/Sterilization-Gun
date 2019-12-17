// import { useState } from "react";
import { setI18nConfig } from "_i18n";
import * as RNLocalize from "react-native-localize";
import { requestLocationPermission } from "_utils";
// const [, updateState] = useState();
// const forceUpdate = useCallback(() => updateState({}), []);

const initializeApp = () => {
  console.log("iam here");
  setI18nConfig();
  RNLocalize.addEventListener("change", this.handleLocalizationChange);
  requestLocationPermission();
};

const cleanApp = () => {
  RNLocalize.removeEventListener("change", this.handleLocalizationChange);
};
handleLocalizationChange = () => {
  setI18nConfig();
  // forceUpdate();
};
export { initializeApp, cleanApp };
