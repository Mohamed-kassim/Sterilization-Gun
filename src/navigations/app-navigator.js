import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "_scenes/home";
// import AboutScreen from "_scenes/about";

const StackNavigatorConfig = {
  
};

const RouteConfigs = {
  Home: {
    screen: HomeScreen
  },

  // About: {
  //   screen: AboutScreen
  // },

};

const AppStack = createStackNavigator(RouteConfigs, StackNavigatorConfig);

export default AppStack;
