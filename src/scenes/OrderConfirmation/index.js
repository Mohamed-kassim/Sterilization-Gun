import React from "react";
import { Block, Text, Divider, Button } from "_atoms";
import { t } from "_i18n";
import Icon from "react-native-vector-icons/FontAwesome";
import { Spacing, Colors } from "_styles";
const OrderConfirmation = ({navigation}) => {

  return (
    <Block center middle>
      <Block flex={0.4} center middle>
        <Icon
          name="check-circle"
          size={Spacing.BASE * 10}
          color={Colors.SUCCESS}
        />
      </Block>
      <Block center flex={0.6}>
        <Text bold h1>
          Thank you for your order
        </Text>

        <Text style={{ marginTop: Spacing.BASE }} center>
          We have sent your order confirmation via e-mail. We will send you an
          update when your order is shipped
        </Text>
        <Block>
          <Button
          style={{ marginTop: Spacing.BASE *2}}
            color={Colors.PRIMARY}
            onPress={() => {
              navigation.navigate('Home')
            }}
          >
            <Text bold>Continue Shopping</Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

OrderConfirmation.navigationOptions = ({ navigation }) => {
  return {
    headerForceInset: { top: "never", bottom: "never" },
    title: t("OrderConfirmation.title"),
    headerStyle: { borderBottomWidth: 0 }
  };
};
export default OrderConfirmation;
