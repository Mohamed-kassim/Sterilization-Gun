import React from "react";

import { Home } from "_organisms";


const HomeScreen = ({ navigation }) => {
  return <Home />;
};
HomeScreen.navigationOptions = ({ navigation }) => {
  return {
     header: () => null
  } 
}
export default HomeScreen;
