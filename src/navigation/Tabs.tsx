import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



import { BottomTabNavigatorParamList } from './types';
import HomeStackNavigator from './HomeStack';
import TrackingScreen from '../screens/TrackingScreen';
import MessageScreen from '../screens/MessageScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabs = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ 
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="view-dashboard-outline" color={color} size={size+3} />
              ),
         }}
        
      />
      <Tab.Screen name="Tracking" component={TrackingScreen}
        options={{ 
        headerShown: false,
        tabBarLabel: 'My Course',
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="sticker-text" color={color} size={size+3} />
            ),
        }}
      />
      <Tab.Screen name="Message" component={MessageScreen}
        options={{ 
        headerShown: false,
        tabBarLabel: 'Message',
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="message-text-outline" color={color} size={size+3} />
            ),
            tabBarBadge: 55,
        }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen}
            options={{ 
            headerShown: false,
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account-circle" color={color} size={size+3} />
                ),
            }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;