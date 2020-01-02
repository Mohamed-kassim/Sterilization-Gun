import React, { useEffect, useState } from "react";
import { Block } from "_atoms";
import { initializeApp, cleanApp } from "_bootstrap/initialize";
import { LoadingAnimation } from "_molecules";
import { t } from "_i18n";
const Initialization = ({ navigation }) => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  useEffect(() => {
    initializeApp();
    setTimeout(() => {
      setIsLoadingComplete(true);
    }, 1500);
    return () => {
      cleanApp();
    };
  }, []);

  const onLoadingFinish = () => {
    console.log("on loading finish", isLoadingComplete);
    navigation.navigate("Language");
  };
  return (
    <Block>
      <LoadingAnimation
        img={require("../../assets/images/logo.png")}
        Loaded={isLoadingComplete}
        onLoadingFinish={onLoadingFinish}
      />
    </Block>
  );
};

export default Initialization;
