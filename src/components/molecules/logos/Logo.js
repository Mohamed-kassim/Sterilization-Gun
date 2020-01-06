import React from "react";
import { Image } from "_atoms";
import logo from "../../../assets/images/logo.png";
const Logo = ({ size = 140, }) => {
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
