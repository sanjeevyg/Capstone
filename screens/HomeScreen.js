
import React, {useReducer, useContext, useState, useEffect} from 'react'
import { Component } from 'react';
import { View, ActivityIndicator, ScrollView, FlatList, Text, Button, ImageBackground, StyleSheet, Image, Dimensions } from 'react-native';
// import { Item } from 'react-native-paper/lib/typescript/src/components/List/List';


// const HomeScreen = ({navigation}) => {
//     const baseURL = "http://localhost:3000"
    
//     // const [isLoading, setLoading] = useState(true);
//     const [data, setData] = useState(null);
    
//     useEffect(() => {
//       console.log('data')
//       getData()
//       console.log({data})
//     },[])

//     // const getData = async () => {
//     //   console.log("hello word")
//     //   await fetch("http://localhost:3000/watches")
//     //   .then(response => response.json())
//     //   .then(result => setData(result))
//     //   // .catch((error) => console.error(error))
//     // }

//     const getData = async () => {
//       console.log("hello word")
//       try {
//         let response = await fetch("http://localhost:3000/watches");
//         let json = await response.json();
//         setData(json);
//       } catch (error) {
//         console.error(error)
//       }
//     }

export default class HomeScreen extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this._isMounted = true;
    fetch('http://localhost:3000/watches')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

    render() {
      const { data, isLoading } = this.state;
      return (
        <View style={styles.container}>  
          {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data} 
            keyExtractor={({image}) => image}
            renderItem={({ item }) => (
              <ScrollView>
                <View style={styles.header}>
                    <Image 
                      style={styles.logo}
                      source={{uri: item.image}}
                      resizeMode={'cover'}
                    />
                    <Text style={styles.text}>${item.price}</Text>
                </View>
              </ScrollView>
            )}
          />
          )}
        </View>
      )
    }
  }

const {height} = Dimensions.get("screen");
const height_logo = height * 0.30;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff'
  },
  header: {
      flex: 4,
      justifyContent: 'center',
      alignItems: 'center'

  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo,
      marginLeft: 0,
      marginTop: 25
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  },
  watch: {
    justifyContent: 'center',
  }
});



// const queryParams = new URLSearchParams(window.location.search)
// const id = queryParams.get("id")
  
    

  // export default HomeScreen

  // <View style={styles.container}>  
  {/* {data.map(e => {
  <Text>
    {e.brand}
  </Text>})} */}
// </View>
// <ScrollView style={styles.container}>
//   <View style={styles.header}>
//     <Image
//       style={styles.logo}
//       source={require('../Images/w4.jpg')}
//     />
//     <Text style={styles.text}>$129</Text>
//   </View>
//   <View style={styles.header}>
//     <Image
//       style={styles.logo}
//       source={require('../Images/w5.jpg')}
//     />
//     <Text style={styles.text}>$199</Text>
//   </View>
//   <View style={styles.header}>
//     <Image
//       style={styles.logo}
//       source={require('../Images/w6.jpg')}
//     />
//     <Text style={styles.text}>$149</Text>
//   </View>
//   <View style={styles.header}>
//     <Image
//       style={styles.logo}
//       source={require('../Images/w7.jpg')}
//     />
//     <Text style={styles.text}>$133</Text>
//   </View>
//   <View style={styles.header}>
//     <Image
//       style={styles.logo}
//       source={require('../Images/w8.jpg')}
//     />
//     <Text style={styles.text}>$179</Text>
//   </View>
//   <View style={styles.header}>
//     <Image
//       style={styles.logo}
//       source={require('../Images/w9.jpg')}
//     />
//     <Text style={styles.text}>$189</Text>
//   </View>
// </ScrollView>
// )      
// }