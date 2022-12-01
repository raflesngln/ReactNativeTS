import React  from 'react';
import { StyleSheet,Dimensions, View, Text, Pressable, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { color } from 'native-base/lib/typescript/theme/styled-system';
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { AspectRatio ,Box,Container, Heading, Center, NativeBaseProvider,VStack ,ZStack,HStack ,Flex, Spacer,Stack,ScrollView,Divider } from "native-base";

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
    <View style={{ flex: 1, paddingTop: 10 }}>
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
      <Example/>
      <Content/>
    </View>
  );
};

const styles = StyleSheet.create({
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
  highlight: {
    fontWeight: '700',
  },
});

function Example() {
  return  <NativeBaseProvider>
  <Center>
      <Container>
        <Heading>
          A component library for the
          <Text color="indigo.300"> React Ecosystem</Text>
        </Heading>
        <Text mt="3" fontWeight="medium">
          NativeBase is a simple, modular and accessible component library that
          gives you building blocks to build you React applications.
        </Text>
      </Container>
    </Center>
    </NativeBaseProvider> 
}


function ContentsItem() {
  var {width} = Dimensions.get('window');
  var lebar=width.toFixed()-2


  return <VStack space={4}  w='100%'>
      <Center  h="20" bg="indigo.300" rounded="md" shadow={3}>HEADER CONTENT</Center>
      <Center  h="20" bg="indigo.500" rounded="md" shadow={3}>BODY CONTENT MENU</Center>
      <Center  h="20" bg="indigo.700" shadow={3}>NEWS INFO OR STATUS</Center>
    </VStack>;
}

  function Content(){
  var {width} = Dimensions.get('window');
  var lebar=width.toFixed()-2
  
        return (
          <NativeBaseProvider>
            <Flex direction="row" mb="2.5" mt="1.5">
              <ContentsItem/>
            </Flex>
            <Center>
              <Text>{lebar.toFixed()}</Text>
            </Center>
          </NativeBaseProvider>
        );
    };

export default HomeScreen;
