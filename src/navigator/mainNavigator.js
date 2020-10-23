import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen413095Navigator from '../features/BlankScreen413095/navigator';
import BlankScreen213085Navigator from '../features/BlankScreen213085/navigator';
import BlankScreen113082Navigator from '../features/BlankScreen113082/navigator';
import BlankScreen013080Navigator from '../features/BlankScreen013080/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen413095: { screen: BlankScreen413095Navigator },
BlankScreen213085: { screen: BlankScreen213085Navigator },
BlankScreen113082: { screen: BlankScreen113082Navigator },
BlankScreen013080: { screen: BlankScreen013080Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
