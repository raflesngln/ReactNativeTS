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
  RefreshControl
} from 'react-native';
import { AspectRatio,Text,Image,Box,Container, Heading, Center, NativeBaseProvider,VStack ,ZStack,HStack ,Flex,Input,Icon ,CheckIcon,Button,FormControl, WarningOutlineIcon, Spacer,Stack,ScrollView,Divider,FlatList,SectionList,Avatar,Badge } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient'
import moment from 'moment';

import {TextCustom} from '../../../components/TextCustom';
import { useAppSelector, useAppDispatch } from '../../redux/hooks'

// import HomeScreenNavigationProp that check fro routes in homescreen
import { HomeScreenNavigationProp } from '../../navigation/types';
import { AuthNavigationProp } from '../../navigation/types';


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
  const navigation = useNavigation<HomeScreenNavigationProp>(); // check which routes is navigates
  const navigationAuth = useNavigation<AuthNavigationProp>(); // check which routes is navigates

  const[jam,setJam]=React.useState(null);
  const [refreshing, setRefreshing] = React.useState(false);
  const datalogin = useAppSelector((state) => state.login)
  const dispatch = useAppDispatch()

  const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);
  
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
                  <VStack space={2} ml="2%" mt="-5%" flexDirection="row" justifyContent="center" justifyItems="center">
                    <Center mt="-10%">
                      <Image source={require('../../../assets/images/course.png')} ml="20%" width="100%" height="230px" style={{resizeMode: 'contain',aspectRatio: 1}} alt="header image"/>
                    </Center>
                  </VStack>
                  <Center w="100%" mt="-7%">
                    <Text pt="1" style={{fontSize:24,color:'#ffffff',fontWeight:'bold'}}>ATT Smart Online Course</Text>
                  </Center>
              </LinearGradient>

              <Box w="100%"  minHeight="600" mt="-10%" pt="5"  bg="#ffffff" roundedTopRight="35" roundedTopLeft="35" >
                <Center mt="1" mb="6">
                  <HStack>
                    <Icon  as={<MaterialIcons name="keyboard-hide" />} size={8} ml="2" color="muted.400" />
                    <Text pl="2" mt="2" style={{fontSize:20,color:'#1f616b',fontWeight:'bold'}}> 
                       FORGOT PASSWORD</Text>
                  </HStack>
                </Center>
                    <Box p="3" w="100%">
                      <FormControl isInvalid w="100%" maxW="100%">
                        <Input h="50px" variant="rounded" w={{base: "100%",md: "100%"}} InputLeftElement={<Icon as={<MaterialIcons name="how-to-reg" />} size={5} ml="2" color="muted.400" />} placeholder="Enter Email / Username" />
                      </FormControl>
                      <Box mt="2">
                        <HStack mb="5" display="flex" justifyContent="space-between">
                          <Box w="60%">
                            <Input mt="5" h="50px" variant="rounded" w={{base: "100%",md: "100%"}} InputLeftElement={<Icon as={<MaterialIcons name="pending" />} size={5} ml="2" color="muted.400" />} placeholder="enter token have send to email" />
                          </Box>
                          <Box  w="35%">
                            <Button mt="5" rounded="22" shadow={8} h="45px" bg="#ff500a">Send Token Code</Button>
                          </Box>
                        </HStack>

                          <Button rounded="22" shadow={8} h="45px" bg="#164ec7"> 
                            <HStack space={2} >
                              <Text style={{color:"#ffff"}}>Submit Forgot Password</Text>
                              <MaterialCommunityIcons name="chevron-right" style={{color:"#ffff"}} size={22} />
                            </HStack>
                          </Button>
                      </Box>
                    </Box>

                    <HStack mt="5" p="3" display="flex" flexDirection="row" justifyContent="space-between">
                      <Box>
                        <Text>Already have an Acount ?</Text>
                        <Text style={styles.bottomText} onPress={() =>navigationAuth.navigate('LoginUser')}>Login here !</Text>
                      </Box>
                      <Box>
                        <Text style={styles.bottomText} onPress={() =>navigationAuth.navigate('RegisterUser')}>Register New User </Text>
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
        minHeight: 250,
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
    });

export default LoginScreen;