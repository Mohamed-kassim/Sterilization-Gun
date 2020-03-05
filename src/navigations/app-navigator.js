import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "_scenes/home";
// import AboutScreen from "_scenes/about";


const Stack = createStackNavigator();

function AppStack() {
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
export default AppStack;
