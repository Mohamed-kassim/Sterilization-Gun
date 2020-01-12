import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "_scenes/home";
import AboutScreen from "_scenes/about";
import Cart from "_scenes/Cart";
import  Settings from "_scenes/Settings";
import  Search from "_scenes/Search";
import ProductDetails from "_scenes/ProductDetails";
import Checkout from "_scenes/Checkout";
import { Spacing } from "_styles";

const StackNavigatorConfig = {
  
};

const RouteConfigs = {
  Home: {
    screen: HomeScreen
  },
  Settings: {
    screen: Settings
  },
  Cart: {
    screen: Cart
  },
  Search: {
    screen: Search
  },
  About: {
    screen: AboutScreen
  },
  ProductDetails: {
    screen: ProductDetails
  },
  Checkout: {
    screen: Checkout
  }
};

const AppStack = createStackNavigator(RouteConfigs, StackNavigatorConfig);

export default AppStack;
