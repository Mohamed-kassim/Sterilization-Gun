import React from 'react'
import { View, Text } from 'react-native'
import { t } from "_i18n";
const PersonalSettings = () => {
    return (
        <View>
            <Text>sdfdsf</Text>
        </View>
    )
}

PersonalSettings.navigationOptions = ({ navigation }) => {
    return {
      headerForceInset: { top: "never", bottom: "never" },
      title: t("PersonalSettings.title"),
      headerStyle: { borderBottomWidth: 0 }
    };
  };
export default PersonalSettings
