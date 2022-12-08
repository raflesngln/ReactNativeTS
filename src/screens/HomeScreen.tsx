import React  from 'react';
import { useNavigation } from '@react-navigation/native';
import { color } from 'native-base/lib/typescript/theme/styled-system';
import { useAppSelector, useAppDispatch } from '../redux/hooks'
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
import { AspectRatio ,Image,Box,Container, Heading, Center, NativeBaseProvider,VStack ,ZStack,HStack ,Flex, Spacer,Stack,ScrollView,Divider,FlatList,SectionList,Avatar,Badge } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient'
import moment from 'moment';

import {TextCustom} from '../../components/TextCustom';

// import HomeScreenNavigationProp that check fro routes in homescreen
import { HomeScreenNavigationProp } from '../navigation/types';
import useEffect from 'react';
import useState from 'react';

const DATA = [
  {
    id: 1,
    name: 'Luke Skywalker',
    birth_year: '19BBY'
  },
  {
    id: 2,
    name: 'C-3PO',
    birth_year: '112BBY'
  },
  {
    id: 3,
    name: 'R2-D2',
    birth_year: '33BBY'
  },
  {
    id: 4,
    name: 'Darth Vader',
    birth_year: '41.9BBY'
  },
  {
    id: 5,
    name: 'Leia Organa',
    birth_year: '19BBY'
  }
];


const HomeScreen = () => {
  // const navigation = useNavigation();
  const navigation = useNavigation<HomeScreenNavigationProp>(); // check which routes is navigates

  const datalogin = useAppSelector((state) => state.login)
  const dispatch = useAppDispatch()

  const renderListItems = ({ item }) => {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate('Details', {
            name: item.name,
            birthYear: item.birth_year
          })
        }
      >
        <Text
          style={{ fontSize: 18, paddingHorizontal: 12, paddingVertical: 12,color:'red' }}
        >
          {item.name}
        </Text>
        <View
          style={{
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: '#ccc',
            backgroundColor:'red',
          }}
        />
      </Pressable>
    );
  };

  return (
    <View style={{ flex: 1, paddingTop: 0 }}>
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
            <Flex direction="row" mb="2.5" mt="-3">
              <VStack space={4}  w='100%'>
              <LinearGradient
                  // colors={['#030e28','#2d3a85','#030e28' ]}
                  colors={['#165970','#15d6d6','#063747' ]}
                  style={styles.headerBox}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Flex pt="1" >
                    <Center zIndex={9} mt="5%" ml="2%" h="20px" p="1" borderRadius="8" position="absolute" bg="#1659704a" >
                      <Text style={{fontSize:15,color:'#ffffff',fontWeight:'bold'}}>Smart Online  </Text>
                    </Center>
                    <Center zIndex={2} mt="9%" ml="1%" borderRadius="8" position="absolute" >
                      <Text style={{fontSize:35,color:'#ffffff',fontWeight:'bold',borderRadius:6,padding:3}}>Course</Text>
                    </Center>
                    <Center mt="-12" >
                      <Image source={require('../../assets/images/course2.png')} mt="1%" ml="29%"  width="98%" height="250px" style={{resizeMode: 'contain',aspectRatio: 1}} alt="header image"/>
                    </Center>
                    {/* <Box mt="-12" position="absolute" zIndex={0}>
                      <Image source={require('../../assets/images/delivery2.png')} mt="10%" ml="40%" width="50%" height="250px" style={{resizeMode: 'contain',aspectRatio: 1}} alt="header image"/>
                    </Box> */}
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
                          <Text style={{color:'#384e52',fontWeight:'normal'}}>All</Text>
                        </Center>
                      </Pressable>
                      {/* </Flex> */}
                    </HStack>
                  </Center>
                </Box>

                <Box w="96%" ml="2%" h="auto" mt="-1" minHeight="150" rounded="8" bg="#ffffff" shadow={5}>
                  <Box>
                  <Flex mt="3" mb="-5" p="3" flex={1}  flexDirection="row" justifyContent="space-between" alignItems="flex-start">
                    <Text >POPULAR</Text>
                    <Text style={{color:'#3f51b5',textDecorationLine:'underline'}}>View more</Text>
                  </Flex>

                  <Flex mt="5" p="2" flex={1}  flexDirection="row" justifyContent="space-between" alignItems="flex-start">
                        <Box w="49%"  rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                        borderColor: "coolGray.600",
                        backgroundColor: "gray.700"
                        }} _web={{
                          shadow: 2,
                          borderWidth: 0
                        }} _light={{
                          backgroundColor: "gray.50"
                        }}>
                      <Pressable
                          onPress={() =>
                            navigation.navigate('DetailProduct', {
                              title: 'Detail Course'
                            })
                          }
                        >
                        <Box>
                          <AspectRatio w="100%" ratio={16 / 9}>
                            <Image source={{
                            uri: "https://img-b.udemycdn.com/course/240x135/1565838_e54e_16.jpg"
                          }} alt="image" />
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
                          <Text style={styles.cardTitle}>The Complete 2023 Web Development Bootcamp</Text>
                          <Text>
                              Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, MongoDB, Web3 and DApps
                          </Text>
                          <HStack alignItems="center" space={4} justifyContent="space-between">
                            <HStack alignItems="center">
                              <Badge colorScheme="warning" variant="outline" borderRadius="full">120.000</Badge>
                            </HStack>
                          </HStack>
                        </Stack>
                        </Pressable>
                      </Box>

                      <Box w="49%"  rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                            borderColor: "coolGray.600",
                            backgroundColor: "gray.700"
                          }} _web={{
                            shadow: 2,
                            borderWidth: 0
                          }} _light={{
                            backgroundColor: "gray.50"
                          }}>
                        <Pressable
                            onPress={() =>
                              navigation.navigate('DetailProduct', {
                                title: 'Detail Course'
                              })
                            }
                          >
                        <Box>
                          <AspectRatio w="100%" ratio={16 / 9}>
                            <Image source={{
                            uri: "https://img.freepik.com/premium-vector/distance-learning-online-education-work-happy-woman-girl-working-office-remotely-using-laptop_503750-461.jpg"
                          }} alt="image" />
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
                          <Text style={styles.cardTitle}>Python From Scratch & Selenium WebDriver</Text>
                          <Text >
                              Python and Selenium WebDriver from scratch for Automation Testing, SQL Crash Course, Framework Design
                          </Text>
                          <HStack alignItems="center" space={4} justifyContent="space-between">
                            <HStack alignItems="center">
                              <Badge colorScheme="warning" variant="outline" borderRadius="full">180.000</Badge>
                            </HStack>
                          </HStack>
                        </Stack>
                        </Pressable>
                      </Box>
                  </Flex>
                 </Box>
                </Box>

                <Box w="96%" ml="2%" h="auto" mt="-1" minHeight="150" rounded="8" bg="#ffffff" shadow={5}>
                  <Box>
                  <Flex mt="3" mb="-5" p="3" flex={1}  flexDirection="row" justifyContent="space-between" alignItems="flex-start">
                    <Text >NEW COURSE</Text>
                    <Text style={{color:'#3f51b5',textDecorationLine:'underline'}}>View more</Text>
                  </Flex>

                  <Flex mt="5" p="2" flex={1}  flexDirection="row" justifyContent="space-between" alignItems="flex-start">
                        <Box w="49%"  rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                        borderColor: "coolGray.600",
                        backgroundColor: "gray.700"
                        }} _web={{
                          shadow: 2,
                          borderWidth: 0
                        }} _light={{
                          backgroundColor: "gray.50"
                        }}>
                      <Pressable
                          onPress={() =>
                            navigation.navigate('DetailProduct', {
                              title: 'Detail Course'
                            })
                          }
                        >
                        <Box>
                          <AspectRatio w="100%" ratio={16 / 9}>
                            <Image source={{
                            uri: "https://img-c.udemycdn.com/course/240x135/3579383_3c67_4.jpg"
                          }} alt="image" />
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
                          <Text style={styles.cardTitle}>Building Modern Web Applications with Go (Golang)</Text>
                          <Text >
                              Learn to program in Go from an award winning university professor
                          </Text>
                          <HStack alignItems="center" space={4} justifyContent="space-between">
                            <HStack alignItems="center">
                              <Badge colorScheme="warning" variant="outline" borderRadius="full">120.000</Badge>
                            </HStack>
                          </HStack>
                        </Stack>
                        </Pressable>
                      </Box>

                      <Box w="49%"  rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                            borderColor: "coolGray.600",
                            backgroundColor: "gray.700"
                          }} _web={{
                            shadow: 2,
                            borderWidth: 0
                          }} _light={{
                            backgroundColor: "gray.50"
                          }}>
                        <Pressable
                            onPress={() =>
                              navigation.navigate('DetailProduct', {
                                title: 'Detail Course'
                              })
                            }
                          >
                        <Box>
                          <AspectRatio w="100%" ratio={16 / 9}>
                            <Image source={{
                            uri: "https://img-b.udemycdn.com/course/240x135/888716_4225_8.jpg"
                          }} alt="image" />
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
                          <Text style={styles.cardTitle}>Introduction to Finance, Accounting, Modeling and Valuation</Text>
                          <Text fontWeight="400">
                              Learn Finance & Accounting from Scratch by an Award
                          </Text>
                          <HStack alignItems="center" space={4} justifyContent="space-between">
                            <HStack alignItems="center">
                              <Badge colorScheme="warning" variant="outline" borderRadius="full">75.000</Badge>
                            </HStack>
                          </HStack>
                        </Stack>
                        </Pressable>
                      </Box>
                  </Flex>
                 </Box>
                </Box>


              </VStack>
            </Flex>
            </ScrollView>

            </SafeAreaView>
          </NativeBaseProvider>
        );
    };

    const Pengumuman = () => {
      const data = [{
        title: "Cyan",
        data: ["cyan.100", "cyan.200", "cyan.300", "cyan.400", "cyan.500"]
      }, {
        title: "Yellow",
        data: ["yellow.100", "yellow.200", "yellow.300", "yellow.400", "yellow.500"]
      }, {
        title: "Violet",
        data: ["violet.100", "violet.200", "violet.300", "violet.400", "violet.500"]
      }];
      return <Center h="80" w="100%">
          <SectionList maxW="300" w="100%" mb="4" sections={data} keyExtractor={(item, index) => item + index} renderItem={({
          item
        }) => <Center py="4" bg={item}>
                {item.split(".")[1]}
              </Center>} renderSectionHeader={({
          section: {
            title
          }
        }) => <Center>
                <Heading fontSize="xl" mt="8" pb="4">
                  {title}
                </Heading>
              </Center>} />
        </Center>
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
        fontSize:'30px',
        color:'#1d64f2'
      },
      cardTitle: {
        color:'#094deb',
        fontWeight: '500'
      },
      headerBox: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 280,
        width:'100%',
      },
    });

export default HomeScreen;