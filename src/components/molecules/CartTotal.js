import React from "react";
import { Block, Text, Divider } from "_atoms";
import { Spacing } from "_styles";

const CartTotal = ({ totalCount, totalPrice }) => {
  return (
    <>
      <Divider flex={false} width="90%" style={{ marginVertical: 0 }} />
      <Block
        row
        middle
        center
        space={"between"}
        flex={false}
        padding={[Spacing.BASE * 0.5, Spacing.BASE * 0.5]}
      >
        <Text weight={"500"} title>
          Shopping Items(<Text>{totalCount}</Text>)
        </Text>
        <Text weight={"500"} >
          Total Cost: <Text>{totalPrice}$</Text>
        </Text>
      </Block>
    </>
  );
};

export default CartTotal;
