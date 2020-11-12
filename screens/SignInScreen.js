import React, {useContext} from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { User, Lock, CheckCircle, EyeOff, Eye, CheckSquare} from "react-native-feather";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserAlt, faCheckCircle, faBars, faSignOutAlt, faHome, faInfoCircle, faUserCircle, faVrCardboard, faShoppingCart, faAlignJustify } from '@fortawesome/free-solid-svg-icons';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserContext} from '../App'


const SignInScreen = ({navigation}) => {

    const [token, setNewUserToken] = useContext(UserContext)
    const baseURL = "http://localhost:3000"

    const [userInfo, setUserInfo] = React.useState({
      username:'',
      password:'',
      textInputStatus: false,
      secureTextEntry: true
    })

    const handleUsernameChange = (val) => {
      if (val.length > 0) {
        setUserInfo({
          ...userInfo,
          username: val,
          textInputStatus: true
         })
      } else {
        setUserInfo({
          ...userInfo,
          username: val,
          textInputStatus: false
         })
      }
    }

    const handlePasswordChange = (val) => {
      if (val.length > 0) {
        setUserInfo({
          ...userInfo,
          password: val
          // textInputStatus: true
         })
      } else {
        setUserInfo({
          ...userInfo,
          password: val,
          textInputStatus: false
         })
      }
    }

    const updateSecureTextEntry = (val) => {
      setUserInfo({
        ...userInfo,
         password: val,
        secureTextEntry: !userInfo.secureTextEntry
      })
    }

    let userSignInfo = {
      username: userInfo.username,
      password: userInfo.password
    }

    const signIn = () => {
      fetch(`${baseURL}/login`, {
        method: "POST", 
        headers: {
            "Content-type": "application/json", 
        }, 
        body: JSON.stringify(userSignInfo)
      }).then(response => response.json())
        .then(result => storeData(result.token)) 
    };

   
    // const storeData = async (token) => {
    //   try {
    //     await AsyncStorage.setItem('@storage_Key', token)
    //   } catch (e) {
    //     console.log(e)
    //   }
    // }

    // const getData = async () => {
    //   try {
    //     const token = await AsyncStorage.getItem('@storage_Key')
    //     if( token!== null) {
    //       console.log(token)
    //       return token
    //     }
    //   } catch(e) {
    //     console.log(e)
    //   }
    // }

    // const newToken = getData()


    // const updateToken = () => {
    //   signIn()
    //   setNewUserToken({token: newToken})
    // }

    return (
      <View style={styles.container} >
        <View style={styles.header}>
            <Text style={styles.text_header}>Welcome!</Text>
        </View>
        <View style={styles.footer}>
            <Text style={styles.text_footer}>Username</Text>
            <View>
              <View style={styles.username}>
                <User stroke="#05375a" fill="#fff" width={23} height={23} />  
                <TextInput placeholder="Username" style={styles.textInput} onChangeText={(val)=>handleUsernameChange(val)} autoCapitalize='none'/>
                  {userInfo.textInputStatus ? <CheckCircle stroke="green" width={19} height={19} /> : null}
              </View>
            </View>
            <View>
              <Text style={styles.text_footer}>Password</Text>
              <View style={styles. password}>
                <Lock stroke="#05375a" fill="#fff" width={20} height={20} />
                <TextInput placeholder="Password" style={styles.textInput} secureTextEntry={userInfo.secureTextEntry} onChangeText={(val)=>handlePasswordChange(val)}/>
                <TouchableOpacity onPress={(val)=>updateSecureTextEntry(val)}>
                  {userInfo.secureTextEntry? <EyeOff stroke="grey" fill="#fff" width={19} height={19}/> : <Eye stroke="green" fill="#fff" width={19} height={19} />}
                </TouchableOpacity>
              </View>
            </View>
            <View>
                <TouchableOpacity onPress={updateToken}>
                  <LinearGradient colors={['#276891', '#1B4965']} style={styles.signIn}>
                      <Text style={[styles.textSign, { color: 'white'}]}>Sign In</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('SignUpScreen')}style={styles.signUp}>
                    <Text style={styles.textSign}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>     
      </View>
    );
  }

export default SignInScreen

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#276891'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    username: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        marginBottom: 25
    },
     password: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5,
      marginBottom: 50
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 5,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20
    },
    signUp: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#276891',
      borderWidth: 1,
      borderRadius: 10,
    },
    textSign: {
        color: "#276891",
        fontSize: 18,
        fontWeight: 'bold'
    }
  });

      