import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js";
import memoize from "lodash.memoize"; // Use for caching/memoize for better performance
import { I18nManager } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  ar: () => require("./translations/ar.json"),
  en: () => require("./translations/en.json")
};
const t = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key)
);

const setI18nConfig = async () => {
  console.log('2 i18n ')
  // fallback if no available language fits
  const fallback = { languageTag: "en", isRTL: false };
  let language = await AsyncStorage.getItem("language");
  // language = JSON.parse(language);
  console.log('the lang is', language);
  const { languageTag, isRTL } =
    // language ||
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  // clear translation cache
  t.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  i18n.translations = { [languageTag]: translationGetters[languageTag]() };
  i18n.locale = languageTag;
};

export { t, setI18nConfig };
