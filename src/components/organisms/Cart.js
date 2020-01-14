import React, {useState} from "react";
import { Divider, Block, Text } from "_atoms";
import { ScrollView } from "react-native";
import { t } from "_i18n";
import { CartList, CheckoutButton, CartTotal } from "_organisms";
import { Spacing } from "_styles";

const Cart = ({ navigation }) => {
  const checkout = () => {
    navigation.navigate("OrderSummary");
  };
  return (
    <Block style={{paddingBottom: Spacing.BASE * 3.5}}>
      <CartTotal totalCount={10} totalPrice={200}/>
      <Divider flex={false} width="90%" style={{marginVertical: 0}}/>
      <CartList navigation={navigation} />
      <Divider flex={false} width="90%" style={{marginTop: 0}}/>
      <CheckoutButton navigation={navigation} checkout={checkout} />
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
