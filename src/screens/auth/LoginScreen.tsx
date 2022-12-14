import { useRoute } from '@react-navigation/native';
import React,{useEffect,useState}  from 'react';
import { useNavigation } from '@react-navigation/native';
import { color } from 'native-base/lib/typescript/theme/styled-system';
import {
  SafeAreaView,
  Dimensions,
  View,
  Pressable,
  StatusBar,
  StyleSheet,
  useColorScheme,
  RefreshControl,
  TouchableHighlight,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import { AspectRatio ,Text,Image,Box,Container, Heading, Center, NativeBaseProvider,VStack ,ZStack,HStack ,Flex,Input,Icon ,CheckIcon,Button,FormControl, 
  WarningOutlineIcon, Spacer,Stack,ScrollView,Divider,FlatList,SectionList,Avatar,Badge,useToast } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient'
import moment from 'moment';
import axios from 'axios';

import {TextCustom} from '../../../components/TextCustom';
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { setDataLogin, logout } from '../../redux/apps/LoginSlice'

// import HomeScreenNavigation that check fro routes in homescreen
import { RootNavigation } from '../../navigation/types';
import { AuthNavigation } from '../../navigation/types';

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

const LoginScreen = (props) => {
  const route = useRoute();
  // const { title } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <Content/>
    </View>
  );
};

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

function Content(props:any){
  const [show, setShow] = React.useState(false);
  const toast = useToast();
  const RootnavigationProp = useNavigation<RootNavigation>(); // check which routes is navigates
  const AuthNavigationProp = useNavigation<AuthNavigation>(); // check which routes is navigates
  
  const [message, setMessage] = React.useState('');
  const [stateLogin, setStateLogin] = React.useState({username:'',password:''});
  const [refreshing, setRefreshing] = React.useState(false);
  const [animating, setAnimating] = useState(false);
  const datalogin = useAppSelector((state) => state.login)
  const dispatch = useAppDispatch()

    const CheckLoginState=()=>{
      setAnimating(true);
      if(stateLogin.password==''|| stateLogin.username==''){
        toast.show({
          title: "Please Correct Username and Password",
          placement: "bottom"
        })
        setMessage('Please Correct Username and Password')
        setAnimating(false);
        return
      }
      dispatch(setDataLogin({isLogin:true,username:stateLogin.username,profilePicture:'rafles.jpg',value:90}))
      setTimeout(()=>{
        const cekLogin:boolean=true
        RootnavigationProp.replace(cekLogin === true ? 'HomeMenu' : 'Auth')
        setAnimating(false);
        console.log(datalogin)
        setMessage('')
      },5000)
      console.log('Check Login')
    }

    const stateChange=(usr:any,ev:any)=>{
      setStateLogin(prev=>({
        ...prev,
        [usr]:ev
      }))
    }
    const GoLogin= async()=>{
      console.log('GOLOGIN')
      const dataParams = {
        "username" : "admin@crudbooster.com",
        "password" : "123456"
      };
      const res:any=await axios.post("https://dev2.wakita.id/api/auth", dataParams, {
              headers: {
                token:'asas'
              }
            })
        const respon=await res.data
        console.log(respon.data.auth)
        console.log(respon.data.user)
        dispatch(setDataLogin({username:respon.data.user.name,profilePicture:respon.data.user.photo}))
    }

    useEffect(()=>{
          console.log('State login Berubah')
    },[animating])

  
        return (
          <NativeBaseProvider>
            <SafeAreaView style={styles.container}>
             
            <Flex direction="row" mb="2" mt="-3">
              <VStack space={2}  w='100%'>
                <LinearGradient
                  // colors={['#030e28','#2d3a85','#030e28' ]}
                  colors={['#076875','#0fbd9c','#054f59' ]}
                  style={styles.headerBox}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <VStack space={2} ml="2%" mt="-20%" flexDirection="row" justifyContent="center" justifyItems="center">
                    <Center mt="-15%">
                      <Image source={require('../../../assets/images/course.png')} ml="18%" width="100%" height="270px" style={{resizeMode: 'contain',aspectRatio: 1}} alt="header image"/>
                    </Center>
                  </VStack>
                  <Center w="100%" mt="-9%">
                    <Text pt="1" style={{fontSize:24,color:'#ffffff',fontWeight:'bold'}}>ATT Smart Online Course</Text>
                  </Center>
              </LinearGradient>

              <Box w="100%"  minHeight="600" mt="-25%" pt="5"  bg="#ffffff" roundedTopRight="35" roundedTopLeft="35" >
                <Center mb="2" pt="1">
                    <HStack mb="5">
                      <Icon  as={<MaterialIcons name="admin-panel-settings" />} size={7} ml="2" color="muted.400" />
                      <Text pl="1" pt="1" style={{fontSize:20,color:'#1f616b',fontWeight:'bold'}}>
                        LOGIN USER</Text>
                    </HStack>

                    {
                      animating && <ActivityIndicator
                      animating={animating}
                      color="#f50a70"
                      size="large"
                      style={styles.activityIndicator}
                      />
                    }
                    {
                      message?<Text style={{color:'#f53d18'}}>Your Username & Password not Match !</Text>:''
                    }
                    
                </Center>
                    <Box p="3" w="100%">
                      <FormControl isInvalid w="100%" maxW="100%" isRequired>
                        <Input h="50px" variant="rounded" w={{base: "100%",md: "100%"}} InputLeftElement={<Icon as={<MaterialIcons name="how-to-reg" />} size={5} ml="2" color="muted.400" />} placeholder="Enter Email / Username"
                        value={stateLogin.username} onChangeText={(ev)=>stateChange('username',ev)} />

                        <Input h="50px" mt="3" variant="rounded" w={{base: "100%",md: "100%"}} type={show ? "text" : "password"} InputLeftElement={<Icon as={<MaterialIcons name="lock-outline" />} size={5} ml="2" color="muted.400" />} InputRightElement={<Pressable onPress={() => setShow(!show)}>
                          <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                        </Pressable>} placeholder="Password" onChangeText={(ev)=>stateChange('password',ev)} value={stateLogin.password}/>

                        {/* <FormControl.Label>   Password</FormControl.Label> */}
                      
                      <Box mt="5">
                            <Button rounded="22" shadow={8} h="45px" bg="#0586f0" onPress={CheckLoginState}> 
                              <HStack space={2} >
                                <Text style={{color:"#ffff"}}>SUBMIT LOGIN</Text>
                                <MaterialCommunityIcons name="chevron-right" style={{color:"#ffff"}} size={22} />
                              </HStack>
                            </Button>
                      </Box>
                      </FormControl>
                      <Flex direction="row" justify="center" alignItems="center" mt="5">
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <View style={{flex: 1, height: 1, backgroundColor: '#dbdbdb'}} />
                            <View>
                              <Text style={{width: 60, textAlign: 'center'}}>OR</Text>
                            </View>
                          <View style={{flex: 1, height: 1, backgroundColor: '#dbdbdb'}} />
                        </View>
                      </Flex>
                      <Box mt="3">
                          <Button rounded="22" h="42px" bg="#fc4e2b" shadow={8} onPress={()=>GoLogin()}> 
                            <HStack space={2} >
                              <MaterialCommunityIcons name="google" style={{color:"#ffff"}} size={22} />
                              <Text style={{color:"#ffff"}}>Login With Google</Text>
                            </HStack>
                          </Button>
                      </Box>
                    </Box>

                    <HStack p="3" display="flex" flexDirection="row" justifyContent="space-between">
                      <Box>
                        <Text mt="2" style={styles.bottomText} onPress={() =>AuthNavigationProp.navigate('RegisterUser')}>Register New User</Text>
                      </Box>
                      <Box>
                        <Text>Forgot Password ? </Text>
                        <Text style={styles.bottomText} onPress={() =>AuthNavigationProp.navigate('ForgotPassword',{title:'Lupa Password'})}>Click here ! </Text>
                      </Box>
                    </HStack> 
                </Box>
              </VStack>
            </Flex>

            </SafeAreaView>
          </NativeBaseProvider>
        );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      scrollView: {
        flex: 1,
        backgroundColor: '#dad9db',
        alignItems: 'center',
        justifyContent: 'center',
      },
      sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color:'black'
      },
      sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
      },
      headerTittle: {
        fontSize:'70px',
        color:'#1d64f2'
      },
      headerBox: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 340,
        width:'100%',
      },
      bottomText:{
        fontSize:16,
        marginBottom:8,
        color:'#0858c9',
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#838587"
      },
      contentLists:{
        fontSize:14,
        marginBottom:8,
        color:'#424242'
      },
      activityIndicator: {
        backgroundColor:'#6f757a21',
        borderRadius:30,
        alignItems: 'center',
        position:'absolute',
        width:'100%',
        height: deviceHeight/1,
        top:'-20%',
        paddingBottom:'55%',
        zIndex:99,
      },
    });

export default LoginScreen;