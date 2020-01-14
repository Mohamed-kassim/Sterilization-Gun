import React from "react";
import { Section, Block } from "_atoms";
import { OrderSummaryList as StyledOrderSummaryList } from "_molecules";
import { Spacing } from "_styles";

const data = [
  {
    id: 5,
    image_url: "https://picsum.photos/id/866/1000/1000",
    title: "Juice",
    price: 9.99,
    retailer_item_id: "123213",
    brand: "ACTIV",
    variant: ["Blue", "34x32"],
    retailer: "AMAZON_CA",
    available: true,
    quantity: 1
  },
  {
    id: 5,
    image_url: "https://picsum.photos/id/836/1000/1000",
    title: "Juice",
    price: 9.99,
    retailer_item_id: "123213",
    brand: "ACTIV",
    variant: ["Blue", "34x32"],
    retailer: "AMAZON_CA",
    available: true,
    quantity: 5,
  },
  {
    id: 5,
    image_url: "https://picsum.photos/id/846/1000/1000",
    title: "Juice",
    price: 9.99,
    retailer_item_id: "123213",
    brand: "ACTIV",
    variant: ["Blue", "34x32"],
    retailer: "AMAZON_CA",
    available: true,
    quantity: 5,
  },
  {
    id: 5,
    image_url: "https://picsum.photos/id/826/1000/1000",
    title: "Juice",
    price: 9.99,
    retailer_item_id: "123213",
    brand: "ACTIV",
    variant: ["Blue", "34x32"],
    retailer: "AMAZON_CA",
    available: true,
    quantity: 5,
  }
];
const OrderSummaryList = ({ navigation }) => {
  return (
    <Block  padding={[Spacing.PADDING_15 * 0.5, Spacing.PADDING_15 * 0.5]}>
      <StyledOrderSummaryList navigation={navigation} data={data} />
    </Block>
  );
};

export default OrderSummaryList;
