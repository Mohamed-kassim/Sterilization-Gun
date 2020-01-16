import React from "react";
import { Block, Text, Divider } from "_atoms";
import { Spacing } from "_styles";

const OrderSummaryTotal = ({ totalCount, totalPrice, timer }) => {

  return (
    <>
      <Block flex={false} padding={[Spacing.BASE * 0, Spacing.BASE * 0.5]}>
        <Text
          middle
          style={{ paddingBottom: Spacing.BASE * 0.5 }}
          weight={"500"}
          title
        >
           Time Left:
          <Text  color={"red"}> 
         {` ${timer}`}
          </Text>
        </Text>
          <Text
            style={{ paddingBottom: Spacing.BASE * 0.5 }}
            weight={"500"}
            title
          >
            Items Total: <Text>{totalCount}</Text>
          </Text>
          <Text
            style={{ paddingBottom: Spacing.BASE * 0.5 }}
            weight={"500"}
            title
          >
            Shipping Fees: <Text>{totalPrice}$</Text>
          </Text>
          
        <Text
          
          style={{ paddingBottom: Spacing.BASE * 0.5 }}
          weight={"500"}
          title
        >
          Grand Total: <Text>{totalPrice}$</Text>
        </Text>
      </Block>
    </>
  );
};

export default OrderSummaryTotal;
