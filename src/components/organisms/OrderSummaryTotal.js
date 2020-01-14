import React from "react";
import { OrderSummaryTotal as StyledOrderSummaryTotal } from "_molecules";
const OrderSummaryTotal = ({ totalPrice, totalCount, timer }) => {
  return <StyledOrderSummaryTotal totalPrice={totalPrice} totalCount={totalCount} timer={timer}/>;
};

export default OrderSummaryTotal;
