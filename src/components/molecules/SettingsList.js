import React from "react";
import { VerticalList } from "_atoms";
import { SettingsItem } from "_molecules";
const SettingsList = ({ data, navigation }) => {
  const onPress = () => {
    item.nav === "AddAddress"
      ? navigation.navigate("AddAddress", { route: "Settings" })
      : navigation.navigate(item.nav);
  };
  return data.map(item => (
    <SettingsItem
      item={item}
      onPress={() => {
        navigation.navigate(item.nav);
      }}
      navigation={navigation}
    />
  ));
};

export default SettingsList;
