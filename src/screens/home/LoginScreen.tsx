import { useRoute } from '@react-navigation/native';
import React,{useEffect,useState}  from 'react';
import { useNavigation } from '@react-navigation/native';
import { color } from 'native-base/lib/typescript/theme/styled-system';
import {
  SafeAreaView,
  Dimensions,
  View,
  Text,
  Pressable,
  StatusBar,
  StyleSheet,
  useColorScheme,
  RefreshControl
} from 'react-native';
import { AspectRatio ,Image,Box,Container, Heading, Center, NativeBaseProvider,VStack ,ZStack,HStack ,Flex,Input,Icon,CheckIcon,Button,FormControl, WarningOutlineIcon, Spacer,Stack,ScrollView,Divider,FlatList,SectionList,Avatar,Badge } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient'
import moment from 'moment';

import {TextCustom} from '../../../components/TextCustom';
import { useAppSelector, useAppDispatch } from '../../redux/hooks'

// import HomeScreenNavigationProp that check fro routes in homescreen
import { HomeScreenNavigationProp } from '../../navigation/types';


const DetailScreen = (props) => {
  const route = useRoute();
  const { title } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <Content/>
    </View>
  );
};

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


  function Content(){
    const [show, setShow] = React.useState(false);
  const navigation = useNavigation<HomeScreenNavigationProp>(); // check which routes is navigates

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
              <ScrollView
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
              >
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
                    <Center mt="-9%">
                      <Image source={require('../../../assets/images/course.png')} ml="18%" width="100%" height="290px" style={{resizeMode: 'contain',aspectRatio: 1}} alt="header image"/>
                    </Center>
                  </VStack>
                  <Center w="100%" mt="-10%">
                    <Text style={{fontSize:24,color:'#ffffff',fontWeight:'bold'}}>ATT Smart Online Course</Text>
                  </Center>
              </LinearGradient>

              <Box w="96%" ml="2%" h="auto" minHeight="380" mt="-20%" pt="5" pb="3" bg="#ffffff" roundedTopRight="30" roundedTopLeft="30" roundedBottomRight="10" roundedBottomLeft="10" shadow={5}>
                <Center  mt="1" mb="1">
                    <Text style={{fontSize:20,color:'#1f616b',fontWeight:'bold'}}>LOGIN USER</Text>
                    <Text>&nbsp;</Text>
                    <Text style={{color:'#f53d18'}}>Your Username & Password not Match !</Text>
                </Center>
                    <Box  p="5" w="100%">
                      <FormControl isInvalid w="100%" maxW="100%">
                        <FormControl.Label>Username</FormControl.Label>
                        <Input placeholder="Enter username" w="100%"/>
                        
                        <FormControl.Label>Password</FormControl.Label>
                        <Input placeholder="Enter password" w="100%"/>
                      </FormControl>
                      <Box mt="5">
                          <Button rounded="22" shadow={8} h="45px" bg="#0586f0"> 
                            <HStack space={2} >
                              <Text style={{color:"#ffff"}}>LOGIN</Text>
                              <MaterialCommunityIcons name="chevron-right" style={{color:"#ffff"}} size={22} />
                            </HStack>
                          </Button>
                      </Box>
                      <Box mt="8">
                          <Button rounded="22" h="42px" bg="#fc4e2b" shadow={8}> 
                            <HStack space={2} >
                              <MaterialCommunityIcons name="google" style={{color:"#ffff"}} size={22} />
                              <Text style={{color:"#ffff"}}>Google Account</Text>
                            </HStack>
                          </Button>
                      </Box>
                    </Box>

                    <HStack p="3" display="flex" flexDirection="row" justifyContent="space-between">
                      <Box>
                        <Text style={styles.bottomText}>New Users</Text>
                      </Box>
                      <Box>
                        <Text style={styles.bottomText}>Forgot Password ? </Text>
                      </Box>
                    </HStack>
                </Box>
              </VStack>
            </Flex>
            </ScrollView>

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
    });

export default DetailScreen;