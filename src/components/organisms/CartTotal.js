import React from "react";
import { CartTotal as StyledCartTotal } from "_molecules";
const CartTotal = ({ totalPrice, totalCount }) => {
  return <StyledCartTotal totalPrice={totalPrice} totalCount={totalCount} />;
};

export default CartTotal;
