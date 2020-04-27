import React from "react";
import { StatusBar } from "react-native";
import Navigator from "_scenes/initialization";
import { GlobalStateProvider } from "_globalState";
import { NavigationContainer } from "@react-navigation/native";
import { Colors } from "_styles";

const App = () => (
  <GlobalStateProvider>
    <NavigationContainer>
    <StatusBar backgroundColor={Colors.PRIMARY}  />
      <Navigator />
    </NavigationContainer>
  </GlobalStateProvider>
);

export default App;
