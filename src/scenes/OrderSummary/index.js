import React from "react";
import { Divider, Block } from "_atoms";
import { ScrollView } from "react-native";
import { t } from "_i18n";
import { OrderSummary as OrderSummaryLayout } from "_organisms";
import { Spacing } from "_styles";
const OrderSummary = ({ navigation }) => {
  return (
    <Block>
      <OrderSummaryLayout navigation={navigation} />
    </Block>
  );
};

OrderSummary.navigationOptions = ({ navigation }) => {
  return {
    headerForceInset: { top: "never", bottom: "never" },
    title: t("OrderSummary.title"),
    headerStyle: { borderBottomWidth: 0 }
  };
};
export default OrderSummary;
