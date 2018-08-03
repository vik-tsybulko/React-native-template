import {Platform} from 'react-native';
import {TabNavigator, StackNavigator, TabBarBottom} from 'react-navigation';

import CounterViewContainer from '../modules/counter/CounterViewContainer';
import ColorViewContainer from '../modules/colors/ColorViewContainer';
import Login from '../screens/Login/Login';

const headerColor = '#39babd';
const activeColor = 'white';

// TabNavigator is nested inside StackNavigator
export const MainScreenNavigator = TabNavigator({
  Counter: {screen: CounterViewContainer},
  Color: {screen: ColorViewContainer}
}, {
  tabBarOptions: {
    ...Platform.select({
      android: {
        activeTintColor: activeColor,
        // indicatorStyle: {backgroundColor: activeColor},
        style: {backgroundColor: headerColor},
        showIcon: true
      }
    })
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom'
});

MainScreenNavigator.navigationOptions = {
  title: 'Pepperoni App Template',
  headerTitleStyle: {color: 'white'},
  headerStyle: {
    backgroundColor: headerColor,
    elevation: 0 // disable header elevation when TabNavigator visible
  }
};

// Root navigator is a StackNavigator
const AppNavigator = StackNavigator({
  Login: {screen: Login},
  Home: {screen: MainScreenNavigator},
  InfiniteColorStack: {screen: ColorViewContainer}
});

export default AppNavigator;
