import React, { useState, useEffect } from "react";
import { Divider, Block, Text } from "_atoms";
import { ScrollView } from "react-native";
import { t } from "_i18n";
import { FieldInput } from "_molecules";
import {
  OrderSummaryList,
  PaymentButton,
  OrderSummaryTotal
} from "_organisms";
import { Spacing } from "_styles";

const OrderSummary = ({ navigation }) => {
  const [deliveryNotes, setDeliveryNotes] = useState("");
  const [time, setTime] = useState({mins:10,secs:0})

  const [timeFinished, setTimeFinished] = useState(false)
  const payment = () => {
    navigation.navigate("Checkout");
  };
  renderDeliveryNotes = () => {
    return (
        <FieldInput

          errMsg={"Error in this field"}
          style={{ height: Spacing.BASE * 6, marginHorizontal: Spacing.BASE*.5  }}
          multiline={true}
          onChangeText={text => setDeliveryNotes(text)}
          placeholder={t(`OrderSummary.placeholders.delivery_notes`)}
          label={t(`OrderSummary.placeholders.delivery_notes`)}
        />
    );
  };
  return (
    <Block style={{ paddingBottom: Spacing.BASE * 3.5 }}>

      <Divider flex={false} width="90%" style={{ marginVertical: 0 }} />
      <Text style={{paddingVertical: Spacing.BASE*.5, paddingLeft: Spacing.BASE*.5}}bold >SHOPPING CART</Text>
      <Divider flex={false} width="90%" style={{ marginVertical: 0 }} />
      <OrderSummaryList navigation={navigation} />
      <Divider flex={false} width="90%" style={{ marginTop: 0 }} />
      <Block>
      <OrderSummaryTotal totalCount={10} totalPrice={200} timer={`${time.mins>=0 ? time.mins : 0}:${time.secs < 10 && 0}${time.secs}`}/>
      {renderDeliveryNotes()}
      <PaymentButton navigation={navigation} payment={payment} />
      </Block>
    </Block>
  );
};

OrderSummary.navigationOptions = ({ navigation }) => {
  return {
    headerForceInset: { top: "never", bottom: "never" },
    title: t("OrderSummary.title"),
    headerStyle: { borderBottomWidth: 0 }
  };
};
export default OrderSummary;
