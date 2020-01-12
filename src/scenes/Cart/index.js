import React from "react";
import { Divider } from "_atoms";
import { ScrollView } from "react-native";
import { t } from "_i18n";
import { CartList, CartButton, Cart as CartLayout } from "_organisms";
import { Spacing } from "_styles";
const Cart = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={{ paddingTop: Spacing.BASE }}>
      <CartLayout navigation={navigation} />
    </ScrollView>
  );
};

Cart.navigationOptions = ({ navigation }) => {
  return {
    headerForceInset: { top: "never", bottom: "never" },
    title: t("Cart.title"),
    headerStyle: { borderBottomWidth: 0 }
  };
};
export default Cart;
