import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "_scenes/home";

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />

    </Stack.Navigator>
  );
}
export default AuthStack;
