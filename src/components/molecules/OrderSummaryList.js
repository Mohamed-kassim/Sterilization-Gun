import React from "react";
import { VerticalList } from "_atoms";
import { OrderSummaryItem } from "_molecules";
const OrderSummaryList = ({data, navigation}) => {
  return <VerticalList key={Math.random()} data={data} renderMenuItem={({item}) => <OrderSummaryItem item={item} navigation={navigation}/>} />;
};

export default OrderSummaryList;
