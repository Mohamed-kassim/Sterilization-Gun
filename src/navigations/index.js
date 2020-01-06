import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Initialization from '_scenes/initialization'
import AppNavigator from './app-navigator';
import Language from "_scenes/initialization/initLanguage";
const RootNavigator = createSwitchNavigator(
  {
    Init: Initialization,
    Language: Language,
    App: AppNavigator,

  },
  {
    initialRouteName: 'Init',
  },
);

export default createAppContainer(RootNavigator);
