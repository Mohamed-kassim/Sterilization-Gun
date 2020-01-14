import React from "react";
import { Divider, Block } from "_atoms";
import { ScrollView } from "react-native";
import { t } from "_i18n";
import { CartList, CheckoutButton, Cart as CartLayout } from "_organisms";
import { Spacing } from "_styles";
const Cart = ({ navigation }) => {
  return (
    <Block>
      <CartLayout navigation={navigation} />
    </Block>
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
