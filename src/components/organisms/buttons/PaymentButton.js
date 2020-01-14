import React from "react";
import { Button, Text, Block} from "_atoms";
import { t } from "_i18n";
import { Spacing, Colors } from "_styles";
const PaymentButton = ({payment}) => {
  return (
    <Block  flex ={false} center style={{ marginBottom: Spacing.BASE*.5}}>
    <Button
      normal
      onPress={() => {
        payment();
      }}
      shadow
      color={Colors.PRIMARY}
     
    >
      <Text center bold>
        {t("OrderSummary.buttons.payment")}{" "}
      </Text>
    </Button>
    </Block>
  );
};

export default PaymentButton;
