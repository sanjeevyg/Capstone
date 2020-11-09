import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { User, Lock, CheckCircle, EyeOff, Eye} from "react-native-feather";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserAlt, faCheckCircle, faBars, faSignOutAlt,  faHome, faInfoCircle, faUserCircle, faVrCardboard, faShoppingCart, faAlignJustify } from '@fortawesome/free-solid-svg-icons';



const SignUpScreen = ({navigation}) => {

    const [userInfo, setUserInfo] = React.useState({
      username:'',
      password:'',
      confirm_password: '',
      textInputStatus: false,
      secureTextEntry: true,
      secureTextEntryConfirm: true
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
      setUserInfo({
        ...userInfo,
        password: val
      })
    }

    const confirmNewPassword = (val) => {
      setUserInfo({
        ...userInfo,
        confirm_password: val
      })
    }

    

    const handleSecureTextEntry = (val) => {
      setUserInfo({
        ...userInfo,
        secureTextEntry: !userInfo.secureTextEntry
      })
    }

    const handleSecureTextEntryPasswordUpdate = (val) => {
      setUserInfo({
        ...userInfo,
        secureTextEntryConfirm: !userInfo.secureTextEntryConfirm
      })
    }

    return (
      <View style={styles.container} >
        <View style={styles.header}>
            <Text style={styles.text_header}>Register!</Text>
        </View>
        <View style={styles.footer}>
            <Text style={styles.text_footer}>Username</Text>

            <View>
              <View style={styles.username}>
                <User stroke="#05375a" fill="#fff" width={23} height={23} />  
                <TextInput placeholder="Username" style={styles.textInput} onChangeText={(val)=>handleUsernameChange(val)} autoCapitalize='none'/>
                {userInfo.textInputStatus ? <CheckCircle stroke="#276891" fill="#fff" width={19} height={19} /> : null}
              </View>
            </View>

            <View>
              <Text style={styles.text_footer}>Password</Text>
              <View style={styles.password}>
                <Lock stroke="#05375a" fill="#fff" width={20} height={20} />
                <TextInput placeholder="Password" style={styles.textInput} secureTextEntry={userInfo.secureTextEntry} onChangeText={(val)=>handlePasswordChange(val)}/>
                <TouchableOpacity onPress={(val)=>handleSecureTextEntry(val)}>
                  {userInfo.secureTextEntry? <EyeOff stroke="grey" fill="#fff" width={19} height={19} /> : <Eye stroke="#276891" fill="#fff" width={19} height={19} />}
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <Text style={styles.text_footer}>Confirm Password</Text>
              <View style={styles.confirmpassword}>
                <Lock stroke="#05375a" fill="#fff" width={20} height={20} />
                <TextInput placeholder="Confirm Password" style={styles.textInput} secureTextEntry={userInfo.secureTextEntryConfirm} onChangeText={(val)=>confirmNewPassword(val)}/>
                <TouchableOpacity onPress={(val)=>handleSecureTextEntryPasswordUpdate(val)}>
                  {userInfo.secureTextEntryConfirm? <EyeOff stroke="grey" fill="#fff" width={19} height={19} /> : <Eye stroke="#276891" fill="#fff" width={19} height={19} />}
                </TouchableOpacity>
              </View>
            </View>

            <View>
                <TouchableOpacity 
                  onPress={()=>navigation.navigate('SignInScreen')}>
                  <LinearGradient
                      colors={['#276891', '#1B4965']}
                      style={styles.signIn}
                  >
                      <Text style={styles.textSign}>Sign Up</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity 
                  onPress={()=>navigation.navigate('SignInScreen')}
                  style={styles.signUp}
                >
                    <Text style={[styles.textSign, {
                      color: '#276891'
                    }]}>Sign In</Text>
                </TouchableOpacity>
            </View>
            
          </View>
        
      </View>
    );
  }

  export default SignUpScreen

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
      marginBottom: 25
    },
    confirmpassword: {
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
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
  })