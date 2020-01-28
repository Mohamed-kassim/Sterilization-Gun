import React from "react";
import { Block } from "_atoms";
import { ProductPrice as StyledProductPrice } from "_molecules";
import { Spacing } from "_styles";
const ProductPrice = ({ price }) => {
  return (
    <Block row right padding={[0,Spacing.PADDING_15*.7]}>
      <StyledProductPrice price={price} />
    </Block>
  );
};

export default ProductPrice;
