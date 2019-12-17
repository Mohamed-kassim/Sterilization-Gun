import React from "react";
import { SafeAreaView, Text, TouchableHighlight } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import Map from "./map";
import { t } from "_i18n";
import i18n from "i18n-js";
import { Button } from "_atoms";
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Map /> */}
      <Text>Screen: Home</Text>
      <Text>{t("hello")}</Text>
      <TouchableHighlight onPress={() => navigation.navigate("About")}>
        <Text>Go to about</Text>
      </TouchableHighlight>
      <Button
        gradient
        onPress={async () => {
          console.log(i18n.locale);
          const language = JSON.stringify({
            languageTag: i18n.locale === "en" ? "ar" : "en",
            isRTL: i18n.locale === "en" ? true : false
          });
          console.log("language", language);
          await AsyncStorage.setItem("language", language);
        }}
      >
        <Text>{t("buttons.changeLang")}</Text>
      </Button>
    </SafeAreaView>
  );
};

export default HomeScreen;
