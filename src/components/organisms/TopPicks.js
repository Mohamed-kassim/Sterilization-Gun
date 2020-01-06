import React from "react";
import { Section, Block, Divider } from "_atoms";
import { Picks } from "_molecules";
import { Spacing } from "_styles";

const TopPicks = ({navigation}) => {
  
  const data = [
    {
      title: "Juice",
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
    {
        title: "Orange",
        items: [
          {
            image_url: "https://picsum.photos/id/805/200/300",
            title: "Orange Juice",
            price: 11.99,
            retailer_item_id: "da1234"
          },
          {
            image_url: "https://picsum.photos/id/870/200/300",
            title: "Orange Juice",
            price: 11.99,
            retailer_item_id: "da1234"
          },
          {
            image_url: "https://picsum.photos/id/876/200/300",
            title: "Orange Juice",
            price: 11.99,
            retailer_item_id: "da1234"
          }
        ]
      }
  ];
  return data.map(item => {
      return(
          <>
    <Section Header={item.title} centerHeader>
      <Block padding={[Spacing.PADDING_15, Spacing.PADDING_15 * 0.5]}>
        <Picks data={item.items} navigation={navigation}/>
      </Block>
    </Section>
    <Divider width={'92%'}/>
    </>
    )}
  );
};

export default TopPicks;
