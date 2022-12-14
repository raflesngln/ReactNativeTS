import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigatorList } from './types';

import AuthStackNavigator from './AuthStack';

const Stack = createNativeStackNavigator<RootNavigatorList>(); // checking type for name stack & types params

import BottomTabs from './Tabs';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Auth">
          <Stack.Screen name="Auth" component={AuthStackNavigator} />
          <Stack.Screen name="HomeMenu" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;