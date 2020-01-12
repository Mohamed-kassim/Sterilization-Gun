import React from "react";
import { Section, Block } from "_atoms";
import { SearchList as StyledSearchList } from "_molecules";
import { Spacing } from "_styles";

const data = [
  {
    image_url: "https://picsum.photos/id/866/1000/1000",
    title: "White Chair",
    price: 9.99,
    retailer_item_id: "123213",
    rating: 4.2,
    retailer: "AMAZON_CA"
  },
  {
    image_url: "https://picsum.photos/id/822/1000/1000",
    title: "Juice that is jsdfdsfdsf uice but you canJuice thatJuice that is juice but you can't drink it because it's not juice and juice cannot  is juice but you can't drink it because it's not juice and juice cannot 't drink it because it's not juice and juice cannot ",
    price: 9.99,
    retailer_item_id: "123213",
    rating: 4.2,
    retailer: "AMAZON_CA"
  },
  {
    image_url: "https://picsum.photos/id/811/1000/1000",
    title: "Juice",
    price: 9.99,
    retailer_item_id: "123213",
    rating: 4.2,
    retailer: "AMAZON_CA"
  },
  {
    image_url: "https://picsum.photos/id/835/1000/1000",
    title: "Juice",
    price: 9.99,
    retailer_item_id: "123213",
    rating: 4.2,
    retailer: "AMAZON_CA"
  }
];
const SearchList = ({ navigation }) => {
  return (
    <Block padding={[Spacing.PADDING_15 * 0.5, Spacing.PADDING_15 * 0.5]}>
      <StyledSearchList
        navigation={navigation}
        data={data}
      />
    </Block>
  );
};

export default SearchList;
