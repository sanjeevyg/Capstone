import * as React from 'react';
import { View, Text, Button } from 'react-native';


const ProfileScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , color: '#2EC4B6'}} >
        <Text>Profile Screen</Text> 
        <Button
            title="Explore"
            onPress={() => navigation.navigate('Explore')}
        />
      </View>
    );
  }

  export default ProfileScreen