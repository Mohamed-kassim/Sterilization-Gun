import React, {useState} from "react";
import { Divider, Block } from "_atoms";
import { ScrollView } from "react-native";
import { t } from "_i18n";
import { CartList, CartButton } from "_organisms";
import { Spacing } from "_styles";

const Cart = ({ navigation }) => {
  const checkout = () => {
    navigation.navigate("Checkout");
  };
  return (
    <Block>
      <Divider width="95%" />
      <CartList navigation={navigation} />
      <CartButton navigation={navigation} checkout={checkout} />
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
