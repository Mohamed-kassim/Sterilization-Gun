import React, { useState, useEffect } from "react";
import {
  Animated,
  Easing,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import LottieView from "lottie-react-native";
import { Block } from "_atoms";
const { width, height } = Dimensions.get("window");
export default LoadingAnimationComponent = (props) => {



  const onAnimationCompleted = () => {
    props.onLoadingFinish();
  };

  return (
    <Block center middle color={'#75ccb2'}>
      <LottieView
        source={require("_assets/animations/splash.json")}
        autoPlay
        loop={false}
        speed={1}
        style={{ width, height: width, backgroundColor:'#75ccb2', }}
        onAnimationFinish={onAnimationCompleted}
      />
    </Block>
)
  }