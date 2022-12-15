// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient'

import { RootNavigation } from '../navigation/types';
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { setDataLogin, logout } from '../redux/apps/LoginSlice'
// import {  } from 'react-native-svg';
import { Text, Avatar, Badge, VStack, Center, Box, Flex, Heading } from 'native-base';




const SplashScreen = ({navigation}:any) => {
  //State for ActivityIndicator animation
  const Rootnavigation = useNavigation<RootNavigation>(); // croot Navigations
  const datalogin = useAppSelector((state) => state.login)
    const dispatch = useAppDispatch()
  const [animating, setAnimating] = useState(true);

  
  useEffect(() => {
    function GetStatusLogin(){
      const cekLogin:boolean=datalogin.dataLogin.isLogin
      Rootnavigation.replace(cekLogin === true ? 'HomeMenu' : 'Auth')
      console.log('Checking status login')
      // console.log(datalogin)
    }
    setTimeout(() => {
      GetStatusLogin()
      setAnimating(false);
    }, 600);
  }, []);

  return (
    <View >
      <LinearGradient
          colors={['#0f4d87','#24bdb7','#0f4d87' ]}
          style={styles.headerBox}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >

       <Flex pt="11" direction="column" justifyContent="center"  alignItems="center">         
          <Image
            source={require('../../assets/images/course2.png')}
            style={{width: '75%',resizeMode: 'contain',marginTop:'35%'}}
            />
        <Box>
          <Heading>
              <Text mt="5" color="#cffffd" style={{fontSize:30,paddingTop:15}} >Online Course System</Text>
          </Heading>
        </Box>  
        <Box>  
          <ActivityIndicator
            animating={animating}
            color="#FFFFFF"
            size="large"
            style={styles.activityIndicator}
            />
      </Box>
      </Flex>      
      </LinearGradient>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  headerBox: {
    height: '100%',
    width:'100%',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 150,
  },
});