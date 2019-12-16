import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Initialization from '_scenes/initialization'
import AppNavigator from './app-navigator';

const RootNavigator = createSwitchNavigator(
  {
    Init: Initialization,
    App: AppNavigator,
  },
  {
    initialRouteName: 'Init',
  },
);

export default createAppContainer(RootNavigator);
