import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
import ProfileScreen from './ProfileScreen'
import ArScreen from './ArScreen'
import ShopScreen from './ShopScreen'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faSignOutAlt,  faHome, faInfoCircle, faUserCircle, faVrCardboard, faShoppingCart, faAlignJustify } from '@fortawesome/free-solid-svg-icons';

// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            // activeBackgroundColor: '#ABBDD9',
            activeTintColor: '#9CADFC',
            inactiveTintColor: '#FFFFFF',
            style: {
              backgroundColor: '#000411',
            }
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarColor: '#0B0A0A',
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon icon={ faHome} color={color} size={20} />
              ),
            }}
          />
          <Tab.Screen
            name="Details"
            component={DetailsStackScreen}
            options={{
              tabBarLabel: 'Details',
              tabBarColor: '#2B2727',
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon icon={ faInfoCircle} color={color} size={20} />
              ),
            
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ShopStackScreen}
            options={{
              tabBarLabel: 'Cart',
              tabBarColor: '#564E4E',
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon icon={ faShoppingCart} color={color} size={20} />
              ),
              tabBarBadge: 1,
            }}
          />
          <Tab.Screen
            name="Explore"
            component={ArStackScreen}
            options={{
              tabBarLabel: 'Try It',
              tabBarColor: '#8F8F8F',
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon icon={ faVrCardboard} color={color}  size={20} />
              ),
            }}
          />
        </Tab.Navigator>
);


export default MainTabScreen

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ArStack = createStackNavigator();
const ShopStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#0B0A0A'
        }, 
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
      <HomeStack.Screen 
      name="Home" 
      component={HomeScreen}
      options={{title: 'Home', headerLeft: () => (
        <FontAwesomeIcon icon={faBars} size={23}    marginLeft={15} backgroundColor='#183059' color= '#fff' onPress={() => navigation.openDrawer()} />
      )}}
      />
    </HomeStack.Navigator>
  )
  
  const DetailsStackScreen = ({navigation}) => (
    <DetailsStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#2B2727'
        }, 
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
      <DetailsStack.Screen name="Details" component={DetailsScreen} options={{title: 'Watch Specifications'}} />
    </DetailsStack.Navigator>
  )


  const ProfileStackScreen = ({navigation}) => (
    <ProfileStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#000411'
        }, 
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  )

  const ArStackScreen = ({navigation}) => (
    <ArStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#8F8F8F'
        }, 
        headerTintColor: '#0A0A0A',
        // inactiveColor: '#0A0A0A',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
      <ArStack.Screen name="Explore" component={ArScreen} options={{title: 'Augmented Reality Page'}} />
    </ArStack.Navigator>
  )

  const ShopStackScreen = ({navigation}) => (
    <ShopStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#564E4E'
        }, 
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
      <ShopStack.Screen name="Shop" component={ShopScreen} />
    </ShopStack.Navigator>
  )