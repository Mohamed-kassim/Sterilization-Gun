import React, { useEffect, useState } from "react";
import { Block } from "_atoms";

import { LoadingAnimation } from "_molecules";

import App from "_navigations/app-navigator";

const Initialization = ({ navigation }) => {
  const [checkSwitch, setCheckSwitch] = useState(false);

  const onLoadingFinish = async () => {

    setCheckSwitch(true);
  };
  const SplashScreen = () => (
    <Block>
      <LoadingAnimation onLoadingFinish={onLoadingFinish} />
    </Block>
  );
  if (!checkSwitch) {
    return <SplashScreen />;
  } else {
    return <App />;
  }
};

export default Initialization;
