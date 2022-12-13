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

import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { setDataLogin, logout } from '../redux/apps/loginSlice'


const SplashScreen = ({navigation}:any) => {
  //State for ActivityIndicator animation
  const datalogin = useAppSelector((state) => state.login)
    const dispatch = useAppDispatch()
  const [animating, setAnimating] = useState(true);

  
  const ChangeDataLogin=()=>{
    console.warn('You tapped the button!')
    dispatch(setDataLogin({isLogin:true,username:'raflesngln@gmail.com',profilePicture:'no photos',value:90}))
}

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen

      function getDataLogin(){
        const cekLogin=datalogin.isLogin
        navigation.replace(
            cekLogin === true ? 'AuthStackNavigator' : 'HomeScreenPage'
          )
      }

      getDataLogin()

    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/course.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
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
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});