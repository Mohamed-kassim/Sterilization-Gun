import { createStackNavigator } from "react-navigation-stack";
import {Login, AddAddress, PasswordReset, SignUp} from '_scenes/'

const StackNavigatorConfig = {
  initialRouteName: "Login",
};

const RouteConfigs = {
  Login,
  PasswordReset,
  AddAddress,
  SignUp,
};

const AuthStack = createStackNavigator(RouteConfigs, StackNavigatorConfig);


export default AuthStack;
