import React from "react";
import { Block, Image } from "_atoms";
import { CircularButton, Logo } from "_molecules";

import { Colors } from "_styles";
import { Spacing } from "_styles";
const HomeHeader = ({ navigation }) => {
    console.log('navigations is ',navigation)
  const navigate = screen => navigation.navigate(screen);
  return (
    <Block
      center
      middle
      row
      space={"between"}
      padding={[0, Spacing.PADDING_15 * 0.5]}
    >
      <CircularButton
        onPress={() => navigate("Settings")}
        icon={"user"}
        color={"black"}
        bgColor={Colors.PRIMARY}
      />
      <Logo />
      <CircularButton
        onPress={() => navigate("Cart")}
        icon={"shopping-cart"}
        color={"black"}
        bgColor={"white"}
      />
    </Block>
  );
};

export default HomeHeader;
