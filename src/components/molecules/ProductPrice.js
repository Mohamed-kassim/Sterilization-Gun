import React from "react";
import { Text } from "_atoms";
const ProductPrice = ({ price }) => {
  return (
    <Text h3 bold>
      {price}<Text title>$</Text>
    </Text>
  );
};

export default ProductPrice;
