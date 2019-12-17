import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { initializeApp, cleanApp } from "_bootstrap/initialize";
import { t } from "_i18n";
const Initialization = () => {
  useEffect(() => {
    initializeApp();
    return () => {
      cleanApp();
    };
  }, []);
  return (
    <View>
      <Text>{t("hello")}</Text>
    </View>
  );
};

export default Initialization;
