import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "_scenes/home";
import AboutScreen from "_scenes/about";
import Language from "_scenes/initialization/initLanguage";
const StackNavigatorConfig = {
  initialRouteName: "Home",
  // header: null,
  headerMode: "none"
};

const RouteConfigs = {
  Home: {
    screen: HomeScreen
  },
  Language: {
    screen: Language
  },
  About: {
    screen: AboutScreen
  }
};

const AppStack = createStackNavigator(RouteConfigs, StackNavigatorConfig);

export default AppStack;
