import { createStackNavigator } from "react-navigation-stack";
// import {Login, AddAddress, PasswordReset, SignUp} from '_scenes/'
import HomeScreen from "_scenes/home";
const StackNavigatorConfig = {
  initialRouteName: "HomeScreen",
};

const RouteConfigs = {
  HomeScreen
};

const AuthStack = createStackNavigator(RouteConfigs, StackNavigatorConfig);


export default AuthStack;
