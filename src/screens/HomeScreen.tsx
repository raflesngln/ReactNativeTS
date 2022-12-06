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
  FlatList,
  StatusBar,
  StyleSheet,
  useColorScheme,
  RefreshControl
} from 'react-native';
import { AspectRatio ,Image,Box,Container, Heading, Center, NativeBaseProvider,VStack ,ZStack,HStack ,Flex, Spacer,Stack,ScrollView,Divider,Badge } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient'
// import Moment from 'react-moment';

import {TextCustom} from '../../components/TextCustom';

// import HomeScreenNavigationProp that check fro routes in homescreen
import { HomeScreenNavigationProp } from '../navigation/types';

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
      {/* <FlatList data={DATA} renderItem={renderListItems} />

      <Pressable
        onPress={() =>
          navigation.navigate('Settings', {
            title: 'Settings',
          })
        }
      >
      <Text style={{ fontSize:12, paddingHorizontal: 1, paddingVertical: 2,color:'red' }}>{JSON.stringify(datalogin)}</Text>
      <TextCustom style={{ fontSize: 18, paddingHorizontal: 12, paddingVertical: 12,color:'red' }}>
          GOTO About Page 
      </TextCustom>
      </Pressable> */}
      <Content/>
    </View>
  );
};



const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
  function Content(){
  var {width} = Dimensions.get('window');
  var lebar=width.toFixed()-2

  const [refreshing, setRefreshing] = React.useState(false);
  const datalogin = useAppSelector((state) => state.login)
  const dispatch = useAppDispatch()

  const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);
  
  var tgl=new Date();


        return (
          <NativeBaseProvider>
            <SafeAreaView style={styles.container}>
              <ScrollView
              //   contentContainerStyle={styles.scrollView}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
              >
                {/* linear-gradient(140deg, #3f51b5 0%, #405cf7 50%, #3f51b5 75%) */}
            <Flex direction="row" mb="2.5" mt="-3">
              <VStack space={4}  w='100%'>
              <LinearGradient
                  // colors={['#030e28','#2d3a85','#030e28' ]}
                  colors={['#3f51b5','#242e68','#3f51b5' ]}
                  style={styles.headerBox}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Flex pt="1" >
                    <Center zIndex={9} mt="10%" ml="2%" h="20px" p="1" borderRadius="10" position="absolute" bg="#141b3e47" >
                      <Text style={{fontSize:16,color:'#ffffff',fontWeight:'bold'}}>Application </Text>
                    </Center>
                    <Center zIndex={2} mt="18%" ml="14%" h="28px" borderRadius="13" position="absolute" bg="#141b3e61">
                      <Text style={{fontSize:28,color:'#ffffff',fontWeight:'bold'}}>TRACKING</Text>
                    </Center>
                    <Box mt="-12" >
                      <Image source={require('../../assets/images/delivery.png')} mt="6%" ml="-1%" width="50%" height="250px" style={{resizeMode: 'contain',aspectRatio: 1}} alt="header image"/>
                    </Box>
                    <Box mt="-12" position="absolute" zIndex={0}>
                      <Image source={require('../../assets/images/delivery2.png')} mt="10%" ml="40%" width="50%" height="250px" style={{resizeMode: 'contain',aspectRatio: 1}} alt="header image"/>
                    </Box>
                  </Flex>
              </LinearGradient>

              <Box w="96%" ml="2%" h="auto" mt="-25%" pt="5" pb="6" bg="#ffffff" roundedTopRight="22" roundedTopLeft="22" roundedBottomRight="8" roundedBottomLeft="8" shadow={5}>
                <Box ml="8%" mt="2" mb="5">
                    <Text>{`tgl`}</Text>
                </Box>

                  <Center>
                    <HStack space={3} >
                      <Center h="80px" w="20" bg="transparent" borderRadius="15" borderWidth="1" borderColor="#00bcd4">
                        <MaterialCommunityIcons name="adjust" color='#686868' size={23} />
                        <Text style={{color:'#686868',fontWeight:'bold'}}>Tracking</Text>
                      </Center>
                      <Center h="80px" w="20" bg="transparent" borderRadius="10" borderWidth="1" borderColor="#00bcd4">
                        <MaterialCommunityIcons name="folder-home-outline" color='#686868' size={23} />
                        <Text  style={{color:'#686868',fontWeight:'bold'}}>My Works</Text>
                      </Center>
                      <Center h="80px" w="20" bg="transparent" borderRadius="10" borderWidth="1" borderColor="#00bcd4">
                        <MaterialCommunityIcons name="chart-donut" color='#686868' size={23} />
                        <Text  style={{color:'#686868',fontWeight:'bold'}}>Pending</Text>
                      </Center>
                      <Center h="80px" w="20" bg="transparent" borderRadius="10" borderWidth="1" borderColor="#00bcd4">
                        <MaterialCommunityIcons name="check-circle-outline" color='#686868' size={23} />
                        <Text style={{color:'#686868',fontWeight:'bold'}}>Complete</Text>
                      </Center>
                      {/* </Flex> */}
                    </HStack>
                  </Center>
                  <Center mt="5">
                    <HStack space={3} >
                    {/* <Flex direction="row-reverse" mb="2.5" mt="1.5"> */}
                      <Center h="80px" w="20" bg="transparent" borderRadius="10" borderWidth="1" borderColor="#00bcd4">
                        <MaterialCommunityIcons name="alarm" color='#686868' size={23} />
                        <Text style={{color:'#686868',fontWeight:'bold'}}>Tasks</Text>
                      </Center>
                      <Center h="80px" w="20" bg="transparent" borderRadius="10" borderWidth="1" borderColor="#00bcd4">
                        <MaterialCommunityIcons name="arrow-u-left-top" color='#686868' size={23} />
                        <Text style={{color:'#686868',fontWeight:'bold'}}>Import</Text>
                      </Center>
                      <Center h="80px" w="20" bg="transparent" borderRadius="10" borderWidth="1" borderColor="#00bcd4">
                        <MaterialCommunityIcons name="arrow-u-right-top" color='#686868' size={23} />
                        <Text style={{color:'#686868',fontWeight:'bold'}}>Export</Text>
                      </Center>
                      <Center h="80px" w="20" bg="transparent" borderRadius="10" borderWidth="1" borderColor="#00bcd4">
                        <MaterialCommunityIcons name="apps" color='#686868' size={23} />
                        <Text style={{color:'#686868',fontWeight:'bold'}}>All</Text>
                      </Center>
                      {/* </Flex> */}
                    </HStack>
                  </Center>
                </Box>

                <Box w="96%" ml="2%" h="auto" mt="-2" minHeight="150" rounded="8" bg="#ffffff" shadow={5}>
                  <Box>
                  <Flex mt="3" mb="-5" p="3" flex={1}  flexDirection="row" justifyContent="space-between" alignItems="flex-start">
                    <Text >ARTIKEL</Text>
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
                        <Box>
                          <AspectRatio w="100%" ratio={16 / 9}>
                            <Image source={{
                            uri: "https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-18636.jpg?t=st=1670343853~exp=1670344453~hmac=b8f5657d438842aa8cd8798babfd25d3b0008f6b66af6afdf5b145c7735b2b20"
                          }} alt="image" />
                          </AspectRatio>
                          <Center bg="violet.500" _dark={{
                          bg: "violet.400"
                        }} _text={{
                          color: "warmGray.50",
                          fontWeight: "700",
                          fontSize: "xs"
                        }} position="absolute" bottom="0" px="3" py="1.5">
                            HEALTH
                          </Center>
                        </Box>
                        <Stack p="4" space={3}>
                          <Text fontWeight="400">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry
                          </Text>
                          <HStack alignItems="center" space={4} justifyContent="space-between">
                            <HStack alignItems="center">
                              <Badge colorScheme="warning" variant="outline" borderRadius="full">Aktif</Badge>
                            </HStack>
                          </HStack>
                        </Stack>
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
                        <Box>
                          <AspectRatio w="100%" ratio={16 / 9}>
                            <Image source={{
                            uri: "https://img.freepik.com/premium-vector/distance-learning-online-education-work-happy-woman-girl-working-office-remotely-using-laptop_503750-461.jpg"
                          }} alt="image" />
                          </AspectRatio>
                          <Center bg="violet.500" _dark={{
                          bg: "violet.400"
                        }} _text={{
                          color: "warmGray.50",
                          fontWeight: "700",
                          fontSize: "xs"
                        }} position="absolute" bottom="0" px="3" py="1.5">
                            FINANCE
                          </Center>
                        </Box>
                        <Stack p="4" space={3}>
                          <Text fontWeight="400">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry
                          </Text>
                          <HStack alignItems="center" space={4} justifyContent="space-between">
                            <HStack alignItems="center">
                              <Badge colorScheme="warning" variant="outline" borderRadius="full">Aktif</Badge>
                            </HStack>
                          </HStack>
                        </Stack>
                      </Box>
                  </Flex>

                  <Flex mt="5" mb="-5" p="3" flex={1}  flexDirection="row" justifyContent="space-between" alignItems="flex-start">
                    <Text >TASKS</Text>
                    <Text style={{color:'#3f51b5',textDecorationLine:'underline'}}>View More</Text>
                  </Flex>
                  <VStack space={4} alignItems="center" mt="5" borderWidth="1" borderColor="#cacdcf" borderRadius="md" >
                    <Box>
                        <AspectRatio w="90%" ratio={16 / 9}>
                          <Image source={{
                          uri: "https://img.freepik.com/free-vector/illustrated-woman-being-intern-company_23-2148726151.jpg?t=st=1670343853~exp=1670344453~hmac=f6ffc287abf74b335e7bb195020c876a7ca997190078218b146c95959c87f443"
                        }} alt="image" />
                        </AspectRatio>
                        <Stack p="4" space={3}>
                          <Stack space={2}>
                            <Heading size="md" ml="-1">
                              Name
                            </Heading>
                            <Text fontSize="xs" _light={{
                            color: "violet.500"
                          }} _dark={{
                            color: "violet.400"
                          }} fontWeight="500" ml="-0.5" mt="-1">
                              deskripsas
                            </Text>
                          </Stack>
                          <Text fontWeight="400">
                          Deskretiweotr
                          </Text>

                          <HStack alignItems="center" space={4} justifyContent="space-between">
                            <HStack alignItems="center">
                              <Text color="coolGray.600" _dark={{
                              color: "warmGray.200"
                            }} fontWeight="400">
                                6 mins ago
                              </Text>
                            </HStack>
                          </HStack>
                          </Stack>
                      </Box>
                  </VStack>
                 </Box>
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
        height: 280,
        width:'100%',
      },
    });

export default HomeScreen;
