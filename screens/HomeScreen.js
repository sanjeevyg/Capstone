
import * as React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';

const image = { uri: "https://i.pinimg.com/736x/dd/d3/26/ddd3263f0f099c331077197c42464f0a.jpg" };

const HomeScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , color: '#2EC4B6'}}>
        {/* <Text>Home Screen</Text>  */}
            <View style={styles.container}>
                <ImageBackground source={image} style={styles.image}>
                      <Text style={styles.text}>Wonderful Watches</Text>
                </ImageBackground>
            </View>
        <Button
            title="Specifications"
            onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    text: {
      color: "transparent",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "transparent"
    }
  });
  

  export default HomeScreen