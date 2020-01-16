import React from "react";
import { Button, Text, Block} from "_atoms";
import { t } from "_i18n";
import { Spacing, Colors } from "_styles";
import stripe from "tipsi-stripe";

const PaymentButton = ({payment, navigation}) => {
  stripe.setOptions({
    publishableKey: "pk_test_au7sY20WQyvPiUxxYGwcWBtp00jADGUWKZ"
  });
  const requestPayment = () => {
    return stripe
      .paymentRequestWithCardForm()
      .then(stripeTokenInfo => {
        console.log(navigation)
        navigation.navigate('OrderConfirmation')
        console.warn('Token created', { stripeTokenInfo });

      })
      .catch(error => {
        console.warn('Payment failed', { error });
      });
  };
  return (
    <Block  flex ={false} center >
    <Button
      normal
      onPress={() => {
        requestPayment()
      }}
      
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
