import React from "react";

import { TouchableOpacity, StyleSheet } from "react-native";
import { t } from "_i18n";
import { OrdersHistory } from "_organisms";

const OrderHistory = ({navigation}) => {
  
  return (
    <OrdersHistory navigation={navigation}/>
  );
};
OrderHistory.navigationOptions = ({ navigation }) => {
  return {
    headerForceInset: { top: "never", bottom: "never" },
    title: t("OrderHistory.title"),
    headerStyle: { borderBottomWidth: 0 }
  };
};

export default OrderHistory;
