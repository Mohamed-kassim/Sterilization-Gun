import React from "react";
import { Block, Text, Divider} from "_atoms";
import { t } from "_i18n";
import { Accordion } from "_atoms";
import { Spacing } from "_styles";
const OrderHistory = () => {
  const renderAccordionSelf = () => {
    return (
      <Block row padding={[Spacing.BASE * 0.6, 0]}>
        <Block>
          <Text bold center>
            Order Placed on
          </Text>
          <Text caption center>
            27/3/2019
          </Text>
          <Text style={{paddingTop: Spacing.PADDING_15}} bold center>
            Order ID
          </Text>
          <Text caption center>
            #1225411423455
          </Text>
        </Block>
        <Block>
          <Text bold center>
            Total
          </Text>
          <Text caption center>
            359$
          </Text>
          <Text style={{paddingTop: Spacing.PADDING_15*2.1}}  bold center>
            Additional Fees
          </Text>
          <Text caption center>
            0$
          </Text>
        </Block>
        <Block>
          <Text bold center>
            Status
          </Text>
          <Text caption center>
            Received in Local HUB
          </Text>
          <Text style={{paddingTop: Spacing.PADDING_15*1.2}} bold center>
            ETA
          </Text>
          <Text caption center>
            24 March 2020
          </Text>
        </Block>
      </Block>
    );
  };
  return (
    <Block>
      <Accordion AccordionComponent={renderAccordionSelf()}>
        <Text>fsdfds</Text>
      </Accordion>
    </Block>
  );
};
OrderHistory.navigationOptions = ({ navigation }) => {
  return {
    headerForceInset: { top: "never", bottom: "never" },
    title: t("OrderHistory.title"),
    headerStyle: { borderBottomWidth: 0 }
  };
};
export default OrderHistory;
