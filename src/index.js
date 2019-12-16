import React from 'react';

import Navigator from '_navigations';
import {GlobalStateProvider} from '_globalState';
const App = () => (
  <GlobalStateProvider>
    <Navigator />
  </GlobalStateProvider>
);

export default App;
