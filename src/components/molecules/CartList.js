import React from "react";
import { VerticalList } from "_atoms";
import { CartItem } from "_molecules";
const CartList = ({data, navigation}) => {
  return <VerticalList key={Math.random()} data={data} renderMenuItem={({item}) => <CartItem item={item} navigation={navigation}/>} />;
};

export default CartList;
