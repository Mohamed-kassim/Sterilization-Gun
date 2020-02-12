import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Spacing, Colors } from "_styles";
import { ordersHistory } from "_mocks";
import { Block, Text, Divider } from "_atoms";

const OrdersHistory = ({navigation}) => {
  return (
    <Block padding={[Spacing.BASE, Spacing.BASE * 0.25]}>
      {ordersHistory.map(order => (
        <TouchableOpacity onPress={()=>{
            navigation.navigate('OrderDetails')
        }} style={[styles.row, { height: 50 }]}>
          <Block
            row
            space={"between"}
            padding={[Spacing.BASE, Spacing.BASE * 0.25]}
          >
            <Text center>27/3/2019</Text>

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
