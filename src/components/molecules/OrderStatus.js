import React from 'react'
import { View, Text } from 'react-native'

const OrderStatus = ({order_date, eta,status,order_number, total_amount, additional_charges}) => {
    return (
      <Block row padding={[Spacing.BASE * 0.6, 0]}>
        <Block>
          <Text bold center>
            Order Placed on
          </Text>
          <Text caption center>
            {order_date}
          </Text>
          <Text style={{paddingTop: Spacing.PADDING_15}} bold center>
            Order ID
          </Text>
          <Text caption center>
            {order_number}
          </Text>
        </Block>
        <Block>
          <Text bold center>
            Total
          </Text>
          <Text caption center>
            {total_amount}
          </Text>
          <Text style={{paddingTop: Spacing.PADDING_15*2.1}}  bold center>
            Additional Fees
          </Text>
          <Text caption center>
            {additional_charges}$
          </Text>
        </Block>
        <Block>
          <Text bold center>
            Status
          </Text>
          <Text caption center>
            {status}
          </Text>
          <Text style={{paddingTop: Spacing.PADDING_15*1.2}} bold center>
            ETA
          </Text>
          <Text caption center>
            {eta}
          </Text>
        </Block>
      </Block>
    );
}

export default OrderStatus
