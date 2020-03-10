import React, { useEffect, useState } from "react";
import { Block } from "_atoms";
import { initializeApp, cleanApp } from "_bootstrap/initialize";
import { LoadingAnimation } from "_molecules";
import { t } from "_i18n";
import App from "_navigations/app-navigator";
import Auth from "_navigations/auth-navigator";
const Initialization = ({ navigation }) => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [checkSwitch, setCheckSwitch] = useState(false);
  const [connected, setConnected] = useState(false);
  useEffect(() => {
    initializeApp();
    setTimeout(() => {
      setIsLoadingComplete(true);
    }, 1500);
    return () => {
      cleanApp();
    };
  }, []);

  const onLoadingFinish = async () => {
    console.log("on loading finish", isLoadingComplete);
    setCheckSwitch(true);
  };
  const SplashScreen = () => (
    <Block>
      <LoadingAnimation
        img={require("../../assets/images/logo.png")}
        Loaded={isLoadingComplete}
        onLoadingFinish={onLoadingFinish}
      />
    </Block>
  );
  if (!checkSwitch) {
    return <SplashScreen />;
  } else {
    return connected ? <App/> :<Auth/>
  }
};

export default Initialization;
