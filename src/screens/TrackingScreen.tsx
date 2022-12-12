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
            <Flex direction="row" mb="2" mt="-15%">
              <VStack space={2}  w='100%'>
                <LinearGradient
                  // colors={['#030e28','#2d3a85','#030e28' ]}
                  colors={['#1e5569','#05876e','#1e5569']}
                  style={styles.headerBox}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
              <Box mt="20%" mb="5">
                <VStack>
                  <Box>
                    <Box p="2" display="flex" flexDirection="row" justifyContent="space-between">
                        <Box>
                        <Text style={{color:'#ffff',fontWeight:'600',fontSize:22}}>MY Course</Text>
                      </Box>
                      <HStack>
                        <Box pl="1"><MaterialCommunityIcons name="file-search-outline" color='#ffff' size={25} /></Box>
                        <Box pl="1"><MaterialCommunityIcons name="bell-outline" color='#ffff' size={25} /></Box>
                        <Box pl="2" mt="-10%">
                        <Avatar bg="green.500" alignSelf="center" size="45px" source={{
                              uri: "https://hris.att-group.co.id/assets/images/karyawan/F01A-150885933/tmp/F01A-150885933-26102021134633.jpeg"
                            }}>
                            AJ
                        </Avatar>
                        </Box>
                      </HStack>
                    </Box>
                  </Box>
                  <Box>
                    <ButtonTabsMenu/>
                  </Box>
                </VStack>
              </Box>
              </LinearGradient>

              </VStack>
            </Flex>
            {/* <Box mt="5%" mb="15%">
              <ListItems/>
            </Box> */}
            <Box p="2" mt="-13%" bg="#ffff" roundedTopRight="22" roundedTopLeft="22" roundedBottomRight="8" roundedBottomLeft="8" shadow={5}>
                {/* <HStack flexDirection="row" justifyContent="space-between">
                  <Box> <Text>&nbsp;</Text></Box>
                  <HStack mt="3"> 
                      <Box><MaterialCommunityIcons name="format-list-checkbox" color='#7a7b7d' size={28} /></Box>
                      <Box><MaterialCommunityIcons name="filter-variant" color='#7a7b7d' size={28} /></Box>
                  </HStack>
                </HStack> */}
              <ItemCard/>
            </Box>
          </ScrollView>
        </SafeAreaView>
      </NativeBaseProvider>
        );
    };

  const ItemCard=()=>{
    
    return(
      <Box mt="5">
        {
          data.map((val,i)=>{
            return(
              <Box key={i} mb="5">
                <Pressable maxW="100%">
                {({
                isHovered,
                isFocused,
                isPressed
              }) => {
                return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
                  transform: [{
                    scale: isPressed ? 0.96 : 1
                  }]
                }} p="2" pt="3" pb="3" rounded="8" shadow={8} borderWidth="1" borderColor="coolGray.300">
                  <HStack  justifyContent="space-between" >
                    <HStack justifyContent="flex-start">
                      <Box><Avatar size="48px" source={{
                          uri: val.avatarUrl
                        }} />
                      </Box>
                      <VStack pl="2" maxWidth="72%">
                        <Text style={styles.sectionTitle}>{val.fullName}</Text>
                        <Text>{val.recentText}</Text>
                        <Text>{val.avatarUrl}</Text>
                      </VStack>
                    </HStack>
                    <Box>
                      <Text><MaterialCommunityIcons name="account-edit" color='#7a7b7d' size={25} /></Text>
                    </Box>
                  </HStack>

                      {/* <HStack alignItems="center">
                      <Avatar size="48px" source={{
                          uri: val.avatarUrl
                        }} />
                        <Spacer />
                        <Text fontSize={10} color="coolGray.800">
                          1 month ago
                        </Text>
                      </HStack> */}
                      {/* <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                        {val.fullName}
                      </Text>
                      <Text mt="2" fontSize="sm" color="coolGray.700">
                        {val.recentText}
                      </Text>
                      <Flex>
                        {isFocused ? <Text mt="2" fontSize={12} fontWeight="medium" textDecorationLine="underline" color="darkBlue.600" alignSelf="flex-start">
                            Read More
                          </Text> : <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                            Read More
                          </Text>}
                      </Flex> */}
                    </Box>;
              }}
              </Pressable>
              </Box>
            )
          })
        }
      </Box>
    )
}

const ButtonTabsMenu = () => {
  return <HStack p="2" direction={{
    base: "row",
    md: "row"
  }} space={4}>
      <Button leftIcon={<MaterialCommunityIcons name="cards-variant" color='#0cb33e' size={17}/>} variant="subtle" rounded="30" bg="#ffff" h="40px" >
        <Text style={{color:'#0cb33e',fontWeight:'bold'}}>All</Text>
      </Button>
      <Button leftIcon={<MaterialCommunityIcons name="atom-variant" color='#f2f2f2' size={17}/>} variant="outline" rounded="30" bgs="#b5b5b5" h="40px" >
        <Text style={{color:'#f2f2f2',fontWeight:'600'}}>Progress</Text>
      </Button>
      <Button leftIcon={<MaterialCommunityIcons name="alarm" color='#f2f2f2' size={17}/>} variant="outline" rounded="30" bgs="#b5b5b5" h="40px" >
        <Text style={{color:'#f2f2f2',fontWeight:'600'}}>Pending</Text>
      </Button>
    </HStack>;
};

const data = [{
  id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  fullName: "MAWAR MERAH",
  timeStamp: "12:47 PM",
  recentText: "Good Day!",
  avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
}, {
  id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
  fullName: "Sujitha Mathur",
  timeStamp: "11:11 PM",
  recentText: "Cheer up, there!",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
}, {
  id: "58694a0f-3da1-471f-bd96-145571e29d72",
  fullName: "Anci Barroco",
  timeStamp: "6:22 PM",
  recentText: "Good Day!",
  avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
}, {
  id: "68694a0f-3da1-431f-bd56-142371e29d72",
  fullName: "Aniket Kumar",
  timeStamp: "8:56 PM",
  recentText: "All the best",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
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
{
  id: "28694a0f-3da1-471f-bd96-142456e5672",
  fullName: "Kiara",
  timeStamp: "12:47 PM",
  recentText: "I will call today.",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
},
{
  id: "28694a0f-3da1-471f-bd96-142456e86772",
  fullName: "Kiara",
  timeStamp: "12:47 PM",
  recentText: "I will call today.",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
},
{
  id: "28694a0f-3da1-471f-bd96-6789456e29d72",
  fullName: "Kiara",
  timeStamp: "12:47 PM",
  recentText: "I will call today.",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
},
{
  id: "28694a0f-3da1-471f-bd96-146756e29d72",
  fullName: "Kiara",
  timeStamp: "12:47 PM",
  recentText: "I will call today.",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
},
{
  id: "28694a0f-3da1-471f-bd96-142459629d72",
  fullName: "Kiara",
  timeStamp: "12:47 PM",
  recentText: "I will call today.",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
},
{
  id: "28694a0f-3da1-471f-bd96-142455429d72",
  fullName: "Kiara",
  timeStamp: "12:47 PM",
  recentText: "I will call today.",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
},
{
  id: "28694a0f-3da1-471f-bd96-1424345629d72",
  fullName: "Kiara",
  timeStamp: "12:47 PM",
  recentText: "I will call today.",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
},
{
  id: "28694a0f-3da1-471f-bd96-14242349d72",
  fullName: "Kiara",
  timeStamp: "12:47 PM",
  recentText: "I will call today.",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
},
{
  id: "28694a0f-3da1-471f-bcfvghj-142456e29d72",
  fullName: "DAVIT Schrume",
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
        fontSize: 15,
        fontWeight: '600',
        color:'black'
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
      headerBox: {
        minHeight: 250,
        width:'100%',
      },
    });

export default DetailScreen;