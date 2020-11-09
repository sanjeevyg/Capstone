/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import * as React from 'react';
import React, {useReducer} from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerContent } from './screens/DrawerContent';


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

import BottomTabScreen from './screens/BottomTabScreen';
import ProfileScreen from './screens/ProfileScreen';
import RootStackScreen from './screens/RootStackScreen';


const Drawer = createDrawerNavigator();

const ACTIONS = {
  AUTHORIZED: 'authorized',
  SIGNUP: 'signUp'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SIGNIN:
      return "hello world"
  }

}

const App = () => {

  const [state, dispatch] = React.useReducer(reducer, {token: null})
  return (
    <NavigationContainer>
       {/* <Drawer.Navigator drawerContent={props => <DrawerContent {... props}/>}>
            <Drawer.Screen name="MainDrawer" component={BottomTabScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
       </Drawer.Navigator>  */}
       <RootStackScreen/>
    </NavigationContainer>
  );
}



export default App;
