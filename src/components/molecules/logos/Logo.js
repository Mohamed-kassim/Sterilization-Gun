import React from "react";
import { Image } from "_atoms";
import logo from "../../../assets/images/logo.png";
import { Spacing } from "_styles";
const Logo = ({ size = Spacing.BASE * 6, }) => {
  return (
    <Image
      style={{
        width: size,
        height: size*.5
      }}
      resizeMode={"contain"}
      source={logo}
    />
  );
};

export default Logo;
