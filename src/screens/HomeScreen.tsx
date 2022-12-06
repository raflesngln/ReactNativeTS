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

import {TextCustom} from '../../components/TextCustom';


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
            <Flex direction="row" mb="2.5" mt="-3">
              {/* <ContentsItem/> */}
              <VStack space={4}  w='100%'>
                <Center  h="150" bg="indigo.300">
                  {/* <AspectRatio w="100%" ratio={16 / 9}>
                    <Image source={{
                    uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                    // uri:{values.avatar}
                  }} alt="image" />
                  </AspectRatio> */}
                <View zIndex={2} mt="5"  position="absolute" style={styles.headerTittle}>
                  {/* <Text fontSize="4xl">ATT GROUP</Text> */}
                </View>
                  <Center mt="-11" >
                  <Image source={require('../../assets/images/works.png')} width="600px" height="300px" alt="header image"/>
                  </Center>
                </Center>

               
                <Box w="100%" h="auto" mt="-10" minHeight="1000" pt="5" bg="#ffffff" roundedTopRight="25" roundedTopLeft="25" shadow={3}>
                  <Center>
                    <HStack space={3} >
                    {/* <Flex direction="row-reverse" mb="2.5" mt="1.5"> */}
                      <Center h="85px" w="20" bg="transparent" borderRadius="15" borderWidth="1" borderColor="#44adbbb0">
                        <MaterialCommunityIcons name="adjust" color='#2f82ba' size={23} />
                        <Text>Tracking</Text>
                      </Center>
                      <Center h="85px" w="20" bg="transparent" borderRadius="10" borderWidth="1" borderColor="#79bee0">
                        <MaterialCommunityIcons name="folder-home-outline" color='#2f82ba' size={23} />
                        <Text>My Works</Text>
                      </Center>
                      <Center h="85px" w="20" bg="transparent" borderRadius="10" borderWidth="1" borderColor="#79bee0">
                        <MaterialCommunityIcons name="chart-donut" color='#2f82ba' size={23} />
                        <Text>Pending</Text>
                      </Center>
                      <Center h="85px" w="20" bg="transparent" borderRadius="10" borderWidth="1" borderColor="#79bee0">
                        <MaterialCommunityIcons name="check-circle-outline" color='#2f82ba' size={23} />
                        <Text>Complete</Text>
                      </Center>
                      {/* </Flex> */}
                    </HStack>
                  </Center>
                  <Center mt="5">
                    <HStack space={3} >
                    {/* <Flex direction="row-reverse" mb="2.5" mt="1.5"> */}
                      <Center h="85px" w="20" bg="transparent" borderRadius="10" borderWidth="1" borderColor="#79bee0">
                        <MaterialCommunityIcons name="alarm" color='#2f82ba' size={23} />
                        <Text>Tracking</Text>
                      </Center>
                      <Center h="85px" w="20" bg="transparent" borderRadius="10" borderWidth="1" borderColor="#79bee0">
                        <MaterialCommunityIcons name="arrow-u-left-top" color='#2f82ba' size={23} />
                        <Text>Import</Text>
                      </Center>
                      <Center h="85px" w="20" bg="transparent" borderRadius="10" borderWidth="1" borderColor="#79bee0">
                        <MaterialCommunityIcons name="arrow-u-right-top" color='#2f82ba' size={23} />
                        <Text>Export</Text>
                      </Center>
                      <Center h="85px" w="20" bg="transparent" borderRadius="10" borderWidth="1" borderColor="#79bee0">
                        <MaterialCommunityIcons name="apps" color='#2f82ba' size={23} />
                        <Text>All</Text>
                      </Center>
                      {/* </Flex> */}
                    </HStack>
                  </Center>

                

                 <Box >
                  <Flex mt="5" mb="-5" p="3" flex={1}  flexDirection="row" justifyContent="space-between" alignItems="flex-start">
                    <Text >PENGUMUMAN</Text>
                    <Text underline>View more</Text>
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
                            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                          }} alt="image" />
                          </AspectRatio>
                          <Center bg="violet.500" _dark={{
                          bg: "violet.400"
                        }} _text={{
                          color: "warmGray.50",
                          fontWeight: "700",
                          fontSize: "xs"
                        }} position="absolute" bottom="0" px="3" py="1.5">
                            PHOTOS
                          </Center>
                        </Box>
                        <Stack p="4" space={3}>
                          <Text fontWeight="400">
                            Bengaluru (also called Bangalore) is the center of India's
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
                            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                          }} alt="image" />
                          </AspectRatio>
                          <Center bg="violet.500" _dark={{
                          bg: "violet.400"
                        }} _text={{
                          color: "warmGray.50",
                          fontWeight: "700",
                          fontSize: "xs"
                        }} position="absolute" bottom="0" px="3" py="1.5">
                            PHOTOS
                          </Center>
                        </Box>
                        <Stack p="4" space={3}>
                          <Text fontWeight="400">
                            Bengaluru (also called Bangalore) is the center of
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
                    <Text underline>View more</Text>
                  </Flex>
                  <VStack space={4} alignItems="center" mt="5" borderWidth="1" borderColor="#cacdcf" borderRadius="md" >
                    <Box>
                        <AspectRatio w="90%" ratio={16 / 9}>
                          <Image source={{
                          uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
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
        fontSize:'30px',
      },
    });

export default HomeScreen;
