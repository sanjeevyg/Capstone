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

import MainTabScreen from './screens/MainTabSceen';


const Drawer = createDrawerNavigator();



const App = () => {
  return (
    <NavigationContainer>
       <Drawer.Navigator drawerContent={props => <DrawerContent {... props}/>}>
        <Drawer.Screen name="Home" component={MainTabScreen} />
        {/* <Drawer.Screen name="Details" component={DetailsStackScreen} /> */}
       </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
