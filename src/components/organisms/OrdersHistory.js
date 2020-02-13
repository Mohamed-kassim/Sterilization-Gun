import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Spacing, Colors } from "_styles";
import { ordersHistory } from "_mocks";
import { Block, Text, Divider } from "_atoms";
import Config from 'react-native-config'
import { useGlobalState } from "_globalState";
import moment from 'moment'
import axios from 'axios'
const OrdersHistory = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [token, setToken] = useGlobalState("token");
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `${Config.BASE_URL}customers/me/orders`,
        { headers: { Authorization: token } }
      );
      console.log(data.data);
      setData(data.data);
    };
    getData();
  }, []);

  // getOrderState = (order_trace)=> {
    
  //   Object.keys(order_trace)
  //     .filter(key => )
  // }
  return (
    <Block padding={[Spacing.BASE, Spacing.BASE * 0.25]}>
      {data.map(order => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("OrderDetails", {order});
          }}
          style={[styles.row, { height: 50 }]}
        >
          <Block
            row
            space={"between"}
            padding={[Spacing.BASE, Spacing.BASE * 0.25]}
          >
            <Text center>{moment(order.order_date).calendar()}</Text>

            <Text center>Received in Local HUB</Text>

            <Text bold>{order.total_amount} $</Text>
          </Block>
        </TouchableOpacity>
      ))}
    </Block>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.PADDING_15 * 0.5,
    alignItems: "center",
    backgroundColor: Colors.PRIMARY,
    borderRadius: Spacing.RADIUS,
    marginBottom: Spacing.BASE * 0.6
  }
});
export default OrdersHistory;
