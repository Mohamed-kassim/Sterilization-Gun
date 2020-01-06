import React, { useEffect, useState } from "react";
import { Block } from "_atoms";
import { initializeApp, cleanApp } from "_bootstrap/initialize";
import { LoadingAnimation } from "_molecules";
import { t } from "_i18n";
import AsyncStorage from "@react-native-community/async-storage";

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

  const onLoadingFinish = async () => {
    console.log("on loading finish", isLoadingComplete);
    let language = await AsyncStorage.getItem("language");
    if(language){
      console.log('found language in async storage with value', language)
      navigation.navigate("Home");
    }
    else{
    console.log('No language ', language)
    navigation.navigate("Language");
  }

    
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
