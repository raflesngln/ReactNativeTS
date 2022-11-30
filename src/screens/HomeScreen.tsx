import React  from 'react';
import { StyleSheet, View, Text, Pressable, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { color } from 'native-base/lib/typescript/theme/styled-system';
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
      <FlatList data={DATA} renderItem={renderListItems} />

      <Pressable
        onPress={() =>
          navigation.navigate('About', {
            title: 'about',
          })
        }
      >
      <TextCustom style={{ fontSize: 18, paddingHorizontal: 12, paddingVertical: 12,color:'red' }}>
          GOTO About Page
      </TextCustom>
      </Pressable>
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

export default HomeScreen;
