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
  Animated,
  useWindowDimensions ,
  TouchableOpacity,
  useColorScheme,
  RefreshControl
} from 'react-native';
import { AspectRatio, Pressable, Image, Box, Container, Heading, Center, NativeBaseProvider, VStack, ZStack, HStack, Flex, Spacer, Stack, ScrollView, Divider, FlatList, SectionList, Avatar, Badge, Button } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient'
import moment from 'moment';

import { TabView,TabBar, SceneMap } from 'react-native-tab-view';
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
                  colors={['#4d90a8','#39c37a','#4d90a8']}
                  style={styles.headerBox}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >

                  <Box h="150" display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
                      <Box p="2" m="2" borderRadius="md" >
                        <Text style={styles.headerTittle}>Message's</Text>
                      </Box>
                      <Box p="2" m="2" borderRadius="md" >
                        {/* <Text>Lorem Ipsum DOlor</Text> */}
                      </Box>
                  </Box>
              </LinearGradient>
              <Box mt="-25" mb="5">
                <TabViewExample/>
              </Box>


              </VStack>
            </Flex>

            {/* <Box p="2" mt="15%" bg="#ffff" roundedTopRight="22" roundedTopLeft="22" roundedBottomRight="8" roundedBottomLeft="8" shadow={5}>
                <HStack flexDirection="row" justifyContent="space-between">
                 <Box> <Text style={styles.sectionTitle}><MaterialCommunityIcons name="card-search-outline" color='#7a7b7d' size={23} /></Text></Box>
                 <HStack mt="5"> 
                  <Text style={styles.sectionTitle}><MaterialCommunityIcons name="format-list-checkbox" color='#7a7b7d' size={25} /></Text>
                  <Text style={styles.sectionTitle}><MaterialCommunityIcons name="filter-variant" color='#7a7b7d' size={25} /></Text>
                 </HStack>
                </HStack>
              <ItemCard/>
            </Box> */}
          </ScrollView>
        </SafeAreaView>
      </NativeBaseProvider>
        );
    };

  const ItemCard=()=>{
    
    return(
      <Box mt="10">
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

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#e3e3e8'}}>
    <ItemCard/>
  </View>
);
const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#e3e3e8'}} >
    <ItemCard/>
  </View>
);
const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#cbced1'}} >
  	<Text style={{color:'#0a0af5'}}>Group Messgae</Text>
  </View>
);
 
// type AppProps = {}

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'All' },
    { key: 'second', title: 'Private' },
    { key: 'third', title: 'Group' },
  ]);

  return (
    <View style={{height: layout.height,}}>
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      />
      </View>
  );
}


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
   

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight,
      },
      scene: {
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
        minHeight: 100,
        width:'100%',
      },
    });

export default DetailScreen;