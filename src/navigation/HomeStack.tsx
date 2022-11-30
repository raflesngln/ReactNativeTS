import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackNavigatorParamList } from './types';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import AboutScreen from '../screens/AboutScreen';

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>(); // checking type for name stack & types params

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="TRACKING APPS" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
      <HomeStack.Screen name="About" component={AboutScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;