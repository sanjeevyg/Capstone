
import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const ExploreScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , color: '#2EC4B6'}}>
        <Text>Augemented Reality</Text> 
        <Button
            title="click Here"
            onPress={() => alert('Button clicked!')}
        />
      </View>
    );
  }

  export default ExploreScreen

  // const styles = StyleSheet.create({
  //     conainter: {
  //       flex: 1, alignItems: 'center', justifyContent: 'center' , color: '#2EC4B6'
  //     }
  // })