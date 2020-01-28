import React from "react";
import { Divider, Text, Block } from "_atoms";
import { Spacing } from "_styles";
const ProductTitle = ({title, brand}) => {
  return (
    <Block
      style={{
        marginTop: Spacing.PADDING_15,
        marginBottom: Spacing.PADDING_15*.2,
        marginHorizontal: Spacing.BASE * 0.5
      }}
    >
      <Text numberOfLines={3} bold h3>
        {title}
      </Text>
      <Text style={{marginTop: Spacing.BASE*.3}}gray body>
        {brand}
      </Text>
    </Block>
  );
};

export default ProductTitle;
