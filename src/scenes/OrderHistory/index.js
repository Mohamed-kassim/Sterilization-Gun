import React from "react";
import { Block, Text, Divider } from "_atoms";
import { t } from "_i18n";
import { Accordion } from "_atoms";
import { Spacing } from "_styles";
const OrderHistory = () => {
  const renderAccordionSelf = () => {
    return (
      <Block
        row
        space={"between"}
        padding={[Spacing.BASE, Spacing.BASE * 0.25]}
      >
        <Text center>27/3/2019</Text>

        <Text center>Received in Local HUB</Text>

        <Text bold>359$</Text>
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
