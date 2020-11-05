/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'

import Icon from 'react-native-vector-icons/Iconicons';
// import Icon from '../node_modules/react-native-vector-icons/Ionicons';


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#009387'
      }, 
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
    <HomeStack.Screen 
    name="Home" 
    component={HomeScreen}
    options={{title: 'Overview', headerLeft: () => (
      <Icon.Button name="ios-menu" size={25} backgroundColor='#009387' onPress={() => navigation.openDrawer()}></Icon.Button>
    )}}
    />
  </HomeStack.Navigator>
)

const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#009387'
      }, 
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
    <DetailsStack.Screen name="Details" component={DetailsScreen} />
  </DetailsStack.Navigator>
)

const App = () => {
  return (
    <NavigationContainer>
       <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailsStackScreen} />
       </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
