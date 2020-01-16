import React, {useState} from "react";
import { Divider, Block, Text } from "_atoms";
import { ScrollView } from "react-native";
import { t } from "_i18n";
import { SettingsList } from "_organisms";
import { SettingsItem } from "_molecules";
import { Spacing } from "_styles";
import {logout} from '_mocks'
const Settings = ({ navigation }) => {

  return (
    <ScrollView style={{paddingBottom: Spacing.BASE * 3.5}}>

      <SettingsList navigation={navigation} />

      <Divider flex={false} width="90%"/>

      <SettingsItem item={logout} navigation={navigation}/>

    </ScrollView>
  );
};

Settings.navigationOptions = ({ navigation }) => {
  return {
    headerForceInset: { top: "never", bottom: "never" },
    title: t("Settings.title"),
    headerStyle: { borderBottomWidth: 0 }
  };
};
export default Settings;
