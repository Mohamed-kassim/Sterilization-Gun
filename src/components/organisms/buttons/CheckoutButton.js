import React from "react";
import { Button, Text, Block} from "_atoms";
import { t } from "_i18n";
import { Spacing, Colors } from "_styles";
const CheckoutButton = ({checkout}) => {
  return (
    <Block  center style={{ marginBottom: Spacing.BASE*.5, position: "absolute", bottom:0, right:0, left:0 }}>
    <Button
      normal
      onPress={() => {
        checkout();
      }}
      shadow
      color={Colors.PRIMARY}
     
    >
      <Text center bold>
        {t("Cart.buttons.checkout")}{" "}
      </Text>
    </Button>
    </Block>
  );
};

export default CheckoutButton;