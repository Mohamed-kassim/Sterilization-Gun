import React from "react";
import {SafeAreaView} from 'react-native'
import Navigator from "_scenes/initialization";
import { GlobalStateProvider } from "_globalState";
import { NavigationContainer } from "@react-navigation/native";

const App = () => (
  <GlobalStateProvider>
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </SafeAreaView>
  </GlobalStateProvider>
);

export default App;
