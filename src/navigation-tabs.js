/* eslint react/display-name: 0 */
/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import {
  createSwitchNavigator,
  addNavigationHelpers,
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator
} from 'react-navigation';
/**
 * Icons
 */
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
/**
 * Screens
 */
import {
  Explore, Saved, Trips, Inbox, LoginScreen,
  AuthLoading, Profile, LandingScreen,
  Balance, Shopping
} from './Screens';
import Settings from './Screens/Settings';
import FlashSale from './Screens/Shopping/FlashSale';
import ListCategory from './Screens/Shopping/ListCategory';
import SingleProduct from './Screens/Shopping/SingleProduct';
import Swiper from './Screens/Swiper';
import BestSeller from './Screens/Shopping/BestSeller';
import ShoppingCart from './Screens/Shopping/ShoppingCart';
import SideBar from './Screens/sidebar';
// import Carousel from './Screens/Carousel';
/**
 * Constants
 */
import { colors, themes } from './utils/constants';

const shoppingNavigator = createStackNavigator(
  {
    ShoppingCart, Shopping, BestSeller, SingleProduct, ListCategory, FlashSale, Balance, // Carousel,
  },
);
const settingsNavigator = createStackNavigator(
  {
    Settings
  },
);

const Drawer = createDrawerNavigator(
  {
    Home: { screen: Shopping }
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#e91e63'
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export const AppStack = createBottomTabNavigator(
  {
    Drawer: { screen: Drawer },
    Shopping: shoppingNavigator,
    Settings: settingsNavigator,
    Trips,
    Explore,
    Saved,
    Inbox
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Explore') {
          iconName = `alien${focused ? '' : ''}`;
        } else if (routeName === 'Saved') {
          iconName = `heart${focused ? '' : '-outline'}`;
        } else if (routeName === 'Inbox') {
          iconName = `message${focused ? '' : '-outline'}`;
        } else if (routeName === 'Trips') {
          iconName = `car${focused ? '' : '-connected'}`;
        } else if (routeName === 'Shopping') {
          iconName = `cart${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `settings${focused ? '' : '-outline'}`;
        }
        return <Icons name={iconName} color={tintColor} size={24} />;
      },
    }),
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: themes.dark.activeTintColor,
      inactiveTintColor: themes.dark.inactiveTintColor,
      style: {
        backgroundColor: themes.dark.tabBarColor,
        borderBottomWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5,
        borderTopColor: themes.dark.tabBarColor,
      },
      indicatorStyle: {
        backgroundColor: themes.dark.activeTintColor
      },
      showIcon: true,
      pressColor: colors.primary,
    },
  },
);

const AuthStack = createStackNavigator(
  {
    Landing: LandingScreen,
    Login: LoginScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      header: null
    })
  }
);

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: Drawer, // Shopping, // Test, //Shopping, // AuthLoading,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading',
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      header: null
    })
  }
);
export class App extends Component {
  render() {
    const screenProps = {
      theme: this.props.theme,
      darkTheme: this.props.darkTheme,
    };
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigator screenProps={screenProps} />
      </SafeAreaView>
    );
  }
}
// export default AppNavigator;

const mapStateToProps = state => ({
  settings: state.settings
});
export default connect(mapStateToProps)(AppNavigator);
