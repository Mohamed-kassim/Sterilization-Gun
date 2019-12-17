import React from "react";

import Navigator from "_navigations";
import { GlobalStateProvider } from "_globalState";
import { SafeAreaView } from "react-navigation";
const App = () => (
  <GlobalStateProvider>
    <SafeAreaView style={{ flex: 1 }}>
      <Navigator />
    </SafeAreaView>
  </GlobalStateProvider>
);

export default App;
