import React from "react";
import { Button, Text, Block} from "_atoms";
import { t } from "_i18n";
import { Spacing, Colors } from "_styles";
import {useGlobalState} from '_globalState'
const AddToCartButton = ({add}) => {
  const [isLoggedIn, setIsLoggedIn] = useGlobalState('isLoggedIn')
  console.log(isLoggedIn)
  return (
    <Block  center style={{ marginBottom: Spacing.BASE*.5, position: "absolute", bottom:0, right:0, left:0 }}>
    <Button
      normal
      onPress={() => {
        add();
      }}
      
      color={Colors.PRIMARY}
     
    >
      <Text center bold>

        {(isLoggedIn)? 
        t("Cart.buttons.AddToCart")
        :
        'Log in to continue '
        }
      </Text>
    </Button>
    </Block>
  );
};

export default AddToCartButton;
