import React from 'react'
import { View, Text } from 'react-native'
import { t } from "_i18n";
const Checkout = () => {
    return (
        <View>
            <Text>test checout</Text>
        </View>
    )
}
Checkout.navigationOptions = ({ navigation }) => {
    return {
      headerForceInset: { top: "never", bottom: "never" },
      title: t("Checkout.title"),
      headerStyle: { borderBottomWidth: 0 }
    };
  };
export default Checkout
