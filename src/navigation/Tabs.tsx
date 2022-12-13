import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, { FadeInUp, FadeOutDown, Layout } from 'react-native-reanimated';
import {View} from 'react-native';

import { BottomTabNavigatorParamList } from './types';
import HomeStackNavigator from './HomeStack';
import TrackingScreen from '../screens/TrackingScreen';
import MessageScreen from '../screens/MessageScreen';
import SettingsScreen from '../screens/SettingsScreen';

const screenOptions = {
  tabBarStyle:{
    backgroundColor:'#0000ff',
    height:100,
  },
  tabBarItemStyle:{
    backgroundColor:'#00ff00',
    margin:5,
    borderRadius:10,
  }
};

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#05f280",
        tabBarInactiveTintColor: "#dff0e7",
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        tabBarStyle: {
          height: 65,
          width:'94%',
          marginLeft:'3%',
          paddingHorizontal:5,
          paddingTop: 5,
          paddingBottom:5,
          // backgroundColor: '#06519c',
          backgroundColor: '#036785',
          position: 'absolute',
          // borderTopWidth: 1,
          // borderTopColor:'#0d3440',
          borderColor:'#0d3440',
          paddingLeft:10,
          paddingRight:10,
          shadowColor:'#0d3440',
          shadowRadius:9,
          shadowOpacity:4,
          borderTopLeftRadius:20,
          borderTopRightRadius:20,
          borderBottomLeftRadius:20,
          borderBottomRightRadius:20,
          marginBottom:6
      },
        pressColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 12,
          padding:2,
        },
        headerStyle: { backgroundColor: '#242833' }, // for header if active
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ 
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="view-dashboard-outline" color={color} size={size+2} />
              ),
         }}
        
      />
      <Tab.Screen name="Tracking" component={TrackingScreen}
        options={{ 
        headerShown: false,
        tabBarLabel: 'My Course',
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="sticker-text" color={color} size={size+2} />
            ),
        }}
      />
      <Tab.Screen name="Message" component={MessageScreen}
        options={{ 
        headerShown: false,
        tabBarLabel: 'Message',
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="message-text-outline" color={color} size={size+2} />
            ),
            tabBarBadge: 55,
        }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen}
            options={{ 
            headerShown: false,
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account-circle" color={color} size={size+2} />
                ),
            }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;