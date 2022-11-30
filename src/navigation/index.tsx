import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import HomeStackNavigator from './HomeStack';  // HomeStackNavigator have include in bottoms tabs menu navigator
import BottomTabs from './Tabs';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      {/* <HomeStackNavigator /> */}
      <BottomTabs />
    </NavigationContainer>
  );
};

export default RootNavigator;