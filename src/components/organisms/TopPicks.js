import React, {useState, useEffect} from "react";
import { Section, Block, Divider } from "_atoms";
import { Picks } from "_molecules";
import { Spacing } from "_styles";
import axios from 'axios'
const TopPicks = ({ navigation }) => {
  const [data, setData] = useState([])
  useEffect( () => {
    const  getData =async  () =>{
      const {data} = await axios.get('http://192.168.1.69:3002/ecommerce/home/top-picks')
      console.log(data)
      setData(data.data.top_picks)
    }
    getData()
  }, [])
  // const data = [
  //   {
  //     title: "Juice",
  //     items: [
  //       {
  //         image_url: "https://picsum.photos/id/866/200/300",
  //         title: "Orange Juice",
  //         price: 11.99,
  //         retailer_item_id: "da1234"
  //       },
  //       {
  //         image_url: "https://picsum.photos/id/820/200/300",
  //         title: "Orange Juice",
  //         price: 11.99,
  //         retailer_item_id: "da1234"
  //       },
  //       {
  //         image_url: "https://picsum.photos/id/810/200/300",
  //         title: "Orange Juice",
  //         price: 11.99,
  //         retailer_item_id: "da1234"
  //       }
  //     ]
  //   },
  //   {
  //     title: "Orange",
  //     items: [
  //       {
  //         image_url: "https://picsum.photos/id/805/200/300",
  //         title: "Orange Juice",
  //         price: 11.99,
  //         retailer_item_id: "da1234"
  //       },
  //       {
  //         image_url: "https://picsum.photos/id/870/200/300",
  //         title: "Orange Juice",
  //         price: 11.99,
  //         retailer_item_id: "da1234"
  //       },
  //       {
  //         image_url: "https://picsum.photos/id/876/200/300",
  //         title: "Orange Juice",
  //         price: 11.99,
  //         retailer_item_id: "da1234"
  //       }
  //     ]
  //   }
  // ];
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

export default TopPicks;
