import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackNavigatorParamList } from './types';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TrackingScreen from '../screens/home/TrackingScreen';
import DetailProduct from '../screens/home/DetailProduct';

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>(); // checking type for name stack & types params

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator 
        screenOptions={{
            headerShown: false,
            contentStyle:{
                backgroundColor:'#ebedf0',
                zIndex:999
              },
        }}
        initialRouteName="HomeScreen"
    >
      {/* <HomeStack.Screen  name="TRACKING APPS" component={HomeScreen} /> */}
      <HomeStack.Screen  name="TRACKING APPS" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
      <HomeStack.Screen name="Tracking" component={TrackingScreen} />
      <HomeStack.Screen name="DetailProduct" component={DetailProduct} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;