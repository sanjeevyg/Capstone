import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, {useReducer, useContext} from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './screens/DrawerContent';

import BottomTabScreen from './screens/BottomTabScreen';
import ProfileScreen from './screens/ProfileScreen';
import SignInScreen from './screens/SignInScreen';
import RootStackScreen from './screens/RootStackScreen';
import { set } from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

const ACTIONS = {
  SIGNIN: 'signIn',
  SIGNOUT: 'signOut'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SIGNIN:
      return "hello world"
  }
}
export const UserContext = React.createContext()

const App = () => {

  const [userToken, setNewUserToken] = React.useState(null)
  const [state, dispatch] = React.useReducer(reducer, null)
  
  return (  
    <NavigationContainer>
      <UserContext.Provider value={[userToken, setNewUserToken]}>
          {userToken ? 
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
                <Drawer.Screen name="MainDrawer" component={BottomTabScreen} />
                <Drawer.Screen name="Profile" component={ProfileScreen} />
          </Drawer.Navigator> :
          <RootStackScreen/>
          }    
      </UserContext.Provider>
    </NavigationContainer>
  );
}

export default App;
