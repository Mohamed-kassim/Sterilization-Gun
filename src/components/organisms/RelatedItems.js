import React from "react";
import { Section, Block, Divider } from "_atoms";
import { Picks } from "_molecules";
import { Spacing } from "_styles";

const RelatedItems = ({ navigation }) => {
  const data = [
    {
      title: "Related Items",
      items: [
        {
          image_url: "https://picsum.photos/id/866/200/300",
          title: "Orange Juice",
          price: 11.99,
          retailer_item_id: "da1234"
        },
        {
          image_url: "https://picsum.photos/id/820/200/300",
          title: "Orange Juice",
          price: 11.99,
          retailer_item_id: "da1234"
        },
        {
          image_url: "https://picsum.photos/id/810/200/300",
          title: "Orange Juice",
          price: 11.99,
          retailer_item_id: "da1234"
        }
      ]
    },
  ];
  return data.map(item => {
    return (
      <>
        <Section
          Header={item.title}
          key={item.title+Math.random()}
          centerHeader
          headerPadding={Spacing.PADDING_15}
        >
          <Block padding={[0, 0]}>
            <Picks data={item.items} navigation={navigation} />
          </Block>
        </Section>
        <Divider width={"92%"} />
      </>
    );
  });
};

export default RelatedItems;
