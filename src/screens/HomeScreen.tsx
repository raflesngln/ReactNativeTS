import { useRoute } from '@react-navigation/native';
import React,{useEffect,useState}  from 'react';
import { useNavigation } from '@react-navigation/native';
import { color } from 'native-base/lib/typescript/theme/styled-system';
import {
  SafeAreaView,
  Dimensions,
  View,
  Text,
  StatusBar,
  StyleSheet,
  useColorScheme,
  RefreshControl
} from 'react-native';
import { AspectRatio, Pressable, Image, Box, Container, Heading, Center, NativeBaseProvider, VStack, ZStack, HStack, Flex, Spacer, Stack, ScrollView, Divider, FlatList, SectionList, Avatar, Badge, Button } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient'
import moment from 'moment';

import {TextCustom} from '../../components/TextCustom';
import { useAppSelector, useAppDispatch } from '../redux/hooks'

// import HomeScreenNavigationProp that check fro routes in homescreen
import { HomeScreenNavigationProp } from '../navigation/types';


const DetailScreen = (props) => {
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


  function Content(){
  var Today=moment().format('ddd, MMMM Do YYYY')
  var {width} = Dimensions.get('window');
  var lebar=width.toFixed()-2
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
            
            <ContentHeader/>

            <Center p="2" mb="-4" mt="-1" zIndex={9}  >
              <Box w="100%" >
                  <HStack flexDirection="row" justifyContent="space-between">
                    <Box pb="3"> <Text style={styles.sectionTitle} >POPULER</Text></Box>
                    <Box pt="4"><Text style={{color:'#3f51b5',textDecorationLine:'underline'}}>View more</Text></Box>
                  </HStack>
              </Box>
            </Center>
            <ItemCard/>

            <Center p="2" mb="-3" zIndex={9}  >
              <Box w="100%" >
                  <HStack flexDirection="row" justifyContent="space-between">
                    <Box pb="3"> <Text style={styles.sectionTitle} >NEWEST COURSE</Text></Box>
                    <Box pt="4"><Text style={{color:'#3f51b5',textDecorationLine:'underline'}}>View more</Text></Box>
                  </HStack>
              </Box>
            </Center>
            <ItemCard/>

          </ScrollView>
        </SafeAreaView>
      </NativeBaseProvider>
        );
    };
    

    function ContentHeader(){
      var Today=moment().format('ddd, MMMM Do YYYY')
      var {width} = Dimensions.get('window');
      var lebar=width.toFixed()-2
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
                  <VStack space={4}  w='100%'>
                  <LinearGradient
                      // colors={['#030e28','#2d3a85','#030e28' ]}
                      colors={['#165970','#15d6d6','#063747' ]}
                      style={styles.headerBox}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                    >
                      <Flex pt="3" >
                        <Center zIndex={9} mt="9%" ml="2%" h="20px" p="1" borderRadius="8" position="absolute" bg="#1659704a" >
                          <Text style={{fontSize:15,color:'#ffffff',fontWeight:'bold'}}>Smart Online  </Text>
                        </Center>
                        <Center zIndex={2} mt="15%" ml="1%" borderRadius="8" position="absolute" >
                          <Text style={{fontSize:35,color:'#ffffff',fontWeight:'bold',borderRadius:6,padding:3}}>Course</Text>
                        </Center>
                        <Center mt="-12" >
                          <Image source={require('../../assets/images/course2.png')} mt="2%" ml="29%"  width="98%" height="300px" style={{resizeMode: 'contain',aspectRatio: 1}} alt="header image"/>
                        </Center>
                      </Flex>
                  </LinearGradient>
    
                  <Box w="96%" ml="2%" h="auto" mt="-26%" pt="5" pb="6" bg="#ffffff" roundedTopRight="22" roundedTopLeft="22" roundedBottomRight="8" roundedBottomLeft="8" shadow={5}>
                    <Box ml="8%" mt="2" mb="5">
                        <Text style={{fontSize:16,color:'#1b7de9',fontWeight:'bold'}}>{`${Today}`}</Text>
                    </Box>
    
                      <Center>
                        <HStack space={3} >
                            <Pressable
                                onPress={() =>
                                  navigation.navigate('Tracking', {
                                    title: 'Tracking'
                                  })
                                }
                              >
                            <Center h="70px" w="20" bg="#b4e7ed" borderRadius="12" borderWidth="1" borderColor="#80c9d1">
                              <MaterialCommunityIcons name="adjust" color='#089981' size={23} />
                              <Text style={{color:'#384e52',fontWeight:'normal'}}>Tracking</Text>
                            </Center>
                          </Pressable>
                          <Pressable
                                onPress={() =>
                                  navigation.navigate('Tracking', {
                                    title: 'My Works'
                                  })
                                }
                              >
                          <Center h="70px" w="20" bg="#b4e7ed" borderRadius="10" borderWidth="1" borderColor="#80c9d1">
                            <MaterialCommunityIcons name="folder-home-outline" color='#089981' size={23} />
                            <Text  style={{color:'#384e52',fontWeight:'normal'}}>My Works</Text>
                          </Center>
                          </Pressable>
                          <Pressable
                                onPress={() =>
                                  navigation.navigate('Tracking', {
                                    title: 'Pending Status'
                                  })
                                }
                              >
                          <Center h="70px" w="20" bg="#b4e7ed" borderRadius="10" borderWidth="1" borderColor="#80c9d1">
                            <MaterialCommunityIcons name="chart-donut" color='#089981' size={23} />
                            <Text  style={{color:'#384e52',fontWeight:'normal'}}>Pending</Text>
                          </Center>
                          </Pressable>
                          <Pressable
                                onPress={() =>
                                  navigation.navigate('Tracking', {
                                    title: 'Complete Status'
                                  })
                                }
                              >
                          <Center h="70px" w="20" bg="#b4e7ed" borderRadius="10" borderWidth="1" borderColor="#80c9d1">
                            <MaterialCommunityIcons name="check-circle-outline" color='#089981' size={23} />
                            <Text style={{color:'#384e52',fontWeight:'normal'}}>Complete</Text>
                          </Center>
                          </Pressable>
                          {/* </Flex> */}
                        </HStack>
                      </Center>
    
                      <Center mt="5">
                        <HStack space={3} >
                        <Pressable
                                onPress={() =>
                                  navigation.navigate('Tracking', {
                                    title: 'Tasks'
                                  })
                                }
                              >
                            <Center h="70px" w="20" bg="#b4e7ed" borderRadius="10" borderWidth="1" borderColor="#80c9d1">
                              <MaterialCommunityIcons name="alarm" color='#089981' size={23} />
                              <Text style={{color:'#384e52',fontWeight:'normal'}}>Tasks</Text>
                            </Center>
                          </Pressable>
                          <Pressable
                                onPress={() =>
                                  navigation.navigate('Tracking', {
                                    title: 'Import'
                                  })
                                }
                              >
                            <Center h="70px" w="20" bg="#b4e7ed" borderRadius="10" borderWidth="1" borderColor="#80c9d1">
                              <MaterialCommunityIcons name="arrow-u-left-top" color='#089981' size={23} />
                              <Text style={{color:'#384e52',fontWeight:'normal'}}>Import</Text>
                            </Center>
                          </Pressable>
                          <Pressable
                                onPress={() =>
                                  navigation.navigate('Tracking', {
                                    title: 'Export'
                                  })
                                }
                              >
                            <Center h="70px" w="20" bg="#b4e7ed" borderRadius="10" borderWidth="1" borderColor="#80c9d1">
                              <MaterialCommunityIcons name="arrow-u-right-top" color='#089981' size={23} />
                              <Text style={{color:'#384e52',fontWeight:'normal'}}>Export</Text>
                            </Center>
                          </Pressable>
                          <Pressable
                                onPress={() =>
                                  navigation.navigate('Tracking', {
                                    title: 'All Menu'
                                  })
                                }
                              >
                            <Center h="70px" w="20" bg="#b4e7ed" borderRadius="10" borderWidth="1" borderColor="#80c9d1">
                              <MaterialCommunityIcons name="apps" color='#089981' size={23} />
                              <Text style={{color:'#384e52',fontWeight:'normal'}}>More</Text>
                            </Center>
                          </Pressable>
                          {/* </Flex> */}
                        </HStack>
                      </Center>
                    </Box>
    
                  </VStack>
                </Flex>
                

                </ScrollView>
    
                </SafeAreaView>
              </NativeBaseProvider>
            );
        };

  const ItemCard=()=>{
    const navigation = useNavigation<HomeScreenNavigationProp>(); // check which routes is navigates

    return(
      <Flex p="1" mt="0" flexDirection="row" justifyContent="space-between" alignItems="flex-start" wrap="wrap">
        {
          data.map((val,i)=>{
            return(
              <Box key={i} mb="5" w="50%">
              <Pressable onPress={() =>navigation.navigate('DetailProduct', {title: 'Detail Course'})} >
                {({
                isHovered,
                isFocused,
                isPressed
              }) => {
                return <Box w="98%"  rounded="lg" borderColor="coolGray.200" borderWidth="1" _dark={{
                      borderColor: "coolGray.600",
                      backgroundColor: "gray.700"
                    }} _web={{
                      shadow: 2,
                      borderWidth: 0
                    }} _light={{
                      backgroundColor: "gray.50"
                    }}
                    // bg={isPressed ? "coolGray.200" : "coolGray.100"}
                    style={{
                      transform: [{
                        scale: isPressed ? 0.95 : 1
                      }]
                    }} 
                    p="2" pt="3" pb="3" rounded="8" shadow={8} borderWidth="1" borderColor="coolGray.300"
                    >
                  
                  <Box>
                    <AspectRatio w="100%" ratio={16 / 9}>
                      <Image source={{
                          uri:`${val.avatarUrl}` 
                        }} style={{width: 400, height: 400}} alt="image" />
                        
                    </AspectRatio>
                    <Center bg="warning.400" _dark={{
                    bg: "warning.400"
                  }} _text={{
                    color: "warmGray.50",
                    fontWeight: "700",
                    fontSize: "xs"
                  }} position="absolute" bottom="0" px="3" py="1.5">
                      Technology
                    </Center>
                  </Box>
                  
                  <Stack p="2" space={3} h="220">
                    <Text style={styles.cardTitle}>{val.fullName}</Text>
                    <Text >
                        Python and Selenium WebDriver from scratch for Automation Testing, SQL Crash Course, Framework Design
                    </Text>
                    <HStack alignItems="center" space={4} justifyContent="space-between">
                      <HStack alignItems="center">
                        <Badge colorScheme="warning" variant="outline" borderRadius="full">180.000</Badge>
                      </HStack>
                    </HStack>
                  </Stack>
                  </Box>
              }}
              </Pressable>
              </Box>
            )
          })
        }
      </Flex>
    )
}
const data = [{
  id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  fullName: "Python From Scratch & Selenium WebDriver",
  timeStamp: "12:47 PM",
  recentText: "Good Day!",
  avatarUrl: "https://img.freepik.com/premium-vector/distance-learning-online-education-work-happy-woman-girl-working-office-remotely-using-laptop_503750-461.jpg"
}, {
  id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
  fullName: "Introduction to Finance, Accounting, Modeling and Valuation",
  timeStamp: "11:11 PM",
  recentText: "Cheer up, there!",
  avatarUrl: "https://img-b.udemycdn.com/course/240x135/888716_4225_8.jpg"
}, {
  id: "58694a0f-3da1-471f-bd96-145571e29d72",
  fullName: "The Complete 2023 Web Development Bootcamp",
  timeStamp: "6:22 PM",
  recentText: "Good Day!",
  avatarUrl: "https://img-b.udemycdn.com/course/240x135/1565838_e54e_16.jpg"
}, {
  id: "68694a0f-3da1-431f-bd56-142371e29d72",
  fullName: "Building Modern Web Applications with Go (Golang)",
  timeStamp: "8:56 PM",
  recentText: "All the best",
  avatarUrl: "https://img-c.udemycdn.com/course/240x135/3579383_3c67_4.jpg"
},
{
  id: "28694a0f-3da1-471f-bd96-142456e29d72",
  fullName: "Kiara",
  timeStamp: "12:47 PM",
  recentText: "I will call today.",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
},
{
  id: "28694a0f-3da1-471f-bd96-142456e2968",
  fullName: "Kiara",
  timeStamp: "12:47 PM",
  recentText: "I will call today.",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
},
];
    const ListItems = () => {
      return <Box p="2" pb="0" mb="-4" minHeight="100%">
          <FlatList data={data} renderItem={({
          item
        }) => <Box borderBottomWidth="1" _dark={{
          borderColor: "muted.100"
        }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="2">
                <HStack space={[2, 3]} justifyContent="space-between">
                  <Avatar size="48px" source={{
              uri: item.avatarUrl
            }} />
                  <VStack>
                    <Text _dark={{
                color: "warmGray.50"
              }} color="coolGray.800" bold>
                      {item.fullName}
                    </Text>
                    <Text color="coolGray.600" _dark={{
                color: "warmGray.200"
              }}>
                      {item.recentText}
                    </Text>
                  </VStack>
                  <Spacer />
                  <Text fontSize="xs" _dark={{
              color: "warmGray.50"
            }} color="coolGray.800" alignSelf="flex-start">
                    {item.timeStamp}
                  </Text>
                </HStack>
              </Box>} keyExtractor={item => item.id} />
        </Box>;
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
        fontSize: 16,
        fontWeight: '800',
        color:'#7d968f'
      },
      sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
      },
      headerTittle: {
        fontSize:25,
        color:'#ffff',
        fontWeight:'bold'
      },
      cardTitle: {
        color:'#094deb',
        fontWeight: '500',
        fontSize:14,
        marginBottom:3
      },
      headerBox: {
        minHeight: 300,
        width:'100%',
      },
    });

export default DetailScreen;