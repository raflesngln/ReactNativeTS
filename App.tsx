/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {extendTheme,Heading,AspectRatio,Text,HStack,Stack, Image,Box, Center, NativeBaseProvider } from "native-base";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { color } from 'native-base/lib/typescript/theme/styled-system';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react';
import {persistor, store } from './src/redux/store'


import RootNavigator from './src/navigation';



const customTheme = extendTheme({
  space: {
    'space-2': '29px',
  },
  components: {
    Button: {
      variants: {
        brand: {
          p: '10',
          bg: 'brand.500',
        },
      },
    },
  },
});
type CustomThemeType = typeof customTheme;
declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}


const App = () => {


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider >
          <RootNavigator />
        </NativeBaseProvider>
      </PersistGate>
  </Provider>
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



const Example = () => {
  return <Box>
      <Box alignSelf="center" // bg="primary.500"
    _text={{
      fontSize: "md",
      fontWeight: "medium",
      color: "warmGray.50",
      letterSpacing: "lg"
        }}
        bg={['red.400', 'blue.400']}
      >
        This is a Box
      </Box>
    </Box>;
};



export default App;
