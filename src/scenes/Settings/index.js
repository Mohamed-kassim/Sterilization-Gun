import React from 'react'
import {Text, Block} from '_atoms'
import {t} from '_i18n'
import {  Settings as SettingsLayout } from "_organisms";

const Settings = ({navigation}) => {
    return (
        <SettingsLayout navigation={navigation}/>
    )
}
Settings.navigationOptions = ({ navigation }) => {
    return {
      headerForceInset: { top: "never", bottom: "never" },
      title: t("Settings.title"),
      headerStyle: { borderBottomWidth: 0 }
    };
  };
export default Settings