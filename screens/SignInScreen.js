import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { User, Lock, CheckCircle, EyeOff, Eye} from "react-native-feather";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserAlt, faCheckCircle, faBars, faSignOutAlt,  faHome, faInfoCircle, faUserCircle, faVrCardboard, faShoppingCart, faAlignJustify } from '@fortawesome/free-solid-svg-icons';



const SignInScreen = ({navigation}) => {

    const [userInfo, setUserInfo] = React.useState({
      email:'',
      password:'',
      textInputStatus: false,
      secureTextEntry: true
    })

    const handleEmailChange = (val) => {
      if (val.length > 0) {
        setUserInfo({
          ...userInfo,
          email: val,
          textInputStatus: true
         })
      } else {
        setUserInfo({
          ...userInfo,
          email: val,
          textInputStatus: false
         })
      }
    }


    const handlePasswordChange = (val) => {
      if (val.length > 0) {
        setUserInfo({
          ...userInfo,
          email: val,
          textInputStatus: true
         })
      } else {
        setUserInfo({
          ...userInfo,
          email: val,
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

    return (
      <View style={styles.container} >
        <View style={styles.header}>
            <Text style={styles.text_header}>Welcome!</Text>
        </View>
        <View style={styles.footer}>
            <Text style={styles.text_footer}>Email</Text>

            <View>
              <View style={styles.email}>
                <User stroke="#05375a" fill="#fff" width={23} height={23} />  
                <TextInput placeholder="Email" style={styles.textInput} onChangeText={(val)=>handleEmailChange(val)} autoCapitalize='none'/>
                {userInfo.textInputStatus ? <CheckCircle stroke="green" fill="#fff" width={19} height={19} /> : null}
              </View>
            </View>

            <View>
              <Text style={styles.text_footer}>Password</Text>
              <View style={styles.password}>
                <Lock stroke="#05375a" fill="#fff" width={20} height={20} />
                <TextInput placeholder="Password" style={styles.textInput} secureTextEntry={userInfo.secureTextEntry} onChangeText={(val)=>handlePasswordChange(val)}/>
                <TouchableOpacity onPress={(val)=>updateSecureTextEntry(val)}>
                  {userInfo.secureTextEntry? <EyeOff stroke="grey" fill="#fff" width={19} height={19} /> : <Eye stroke="green" fill="#fff" width={19} height={19} />}
                </TouchableOpacity>
              </View>
            </View>

            <View>
                <TouchableOpacity>
                  <LinearGradient
                      colors={['#276891', '#1B4965']}
                      style={styles.signIn}
                  >
                      <Text style={[styles.textSign, {
                        color: 'white'
                      }]}>Sign In</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity 
                  onPress={()=>navigation.navigate('SignUpScreen')}
                  style={styles.signUp}
                >
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
    email: {
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

      