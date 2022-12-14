/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, {type PropsWithChildren,useEffect,useState} from 'react';
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
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import {extendTheme,Button,Heading,AspectRatio,Text,HStack,Stack, Image,Box, Center, NativeBaseProvider,useColorMode,useColorModeValue } from "native-base";
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

// ==========REACT QUERY=============
const queryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnMount: true,
      refetchOnWindowFocus:true,
      refetchOnReconnect:true,
      // cacheTime: 1000*300, //30 seconds
      // refetchInterval: 1000*600, //in seconds count
      // refetchIntervalInBackground: false,
      // suspense: false,
      // staleTime: 60,
      // retryDelay: 60
    },
    mutations: {
      retry: 2,
    },
  }
}
const my_queryClient:any = new QueryClient(queryClientConfig)


const App = () => {

  const config = {
    initialColorMode: 'dark' // initial color mode
  };
  
  const mytheme = extendTheme({ config });

  return (
    <Provider store={store}>
      <QueryClientProvider client={my_queryClient}>
        <PersistGate loading={null} persistor={persistor}>
          <NativeBaseProvider theme={mytheme}>
            <RootNavigator />
            {/* <Text>{JSON.stringify(mytheme)}</Text> */}
          </NativeBaseProvider>
        </PersistGate>
        </QueryClientProvider>
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



function Pages() {
  const { colorMode, toggleColorMode } = useColorMode();
  const colorCoggleComponent = useColorModeValue('Light', 'Dark');
  const bgColorMode = useColorModeValue('white', 'black');

  const themes = extendTheme({
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: '_light'
    },
    colors: {
      // Add new color
      primary: {
        50: '#E3F2F9',
        100: '#C5E4F3',
        200: '#A2D4EC',
        300: '#7AC1E4',
        400: '#47A9DA',
        500: '#0088CC',
        600: '#007AB8',
        700: '#006BA1',
        800: '#005885',
        900: '#003F5E'
      },
      // Redefining only one shade, rest of the color will remain same.
      amber: {
        400: '#d97706'
      }
    },
    components: {
      Text: {
        baseStyle: {
          color: 'emerald.400'
        },
        defaultProps: {
          size: 'lg'
        },
        sizes: {
          xl: {
            fontSize: '64px'
          },
          lg: {
            fontSize: '32px'
          },
          md: {
            fontSize: '16px'
          },
          sm: {
            fontSize: '12px'
          }
        },
        Button: {
          variants: {
            rounded: ({ colorScheme }) => {
              return {
                bg: `${colorScheme}.500`,
                rounded: 'full'
              };
            }
          }
        },
        Heading: {
          baseStyle: (props) => {
            return {
              _light: { color: 'red.300' },
              _dark: { color: 'blue.300' }
            };
          }
        }
      }
    }
  });
  
  const config = {
    initialColorMode: 'dark' // initial color mode
  };
  
  const mytheme = extendTheme({ config });

  const storeDataStorageLocal = async (value:any) => {
    try {
      const jsonValue = JSON.stringify(value);
      console.log(value);
      await AsyncStorage.setItem('@storage_Key_apps', jsonValue);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  const getDataStorageLocal = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key_apps');
      // console.log('GET DATA' + jsonValue);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // console.log(e);
    }
  };

  const handleChangeMode = () => {
    toggleColorMode(!colorMode);
  };

  useEffect(() => {
    // code to be run when state variables in
    storeDataStorageLocal({ colorMode: colorMode });
    getDataStorageLocal();
  }, [colorMode]);

  return (
    <NativeBaseProvider theme={mytheme}>
      {/* <Center
        flex="1"
        p="4"
        bg={colorMode === 'dark' ? 'coolGray.800' : 'warmGray.50'}
      > */}
    <View
      style={{
        flexDirection: "column",
        height:'100%',
        width:'100%',
        padding:5,
        // backgroundColor:`${colorMode}=='dark'?'blue':'red'`
        backgroundColor:`${bgColorMode}`
        
      }}
    >
        <RootNavigator />
   
      </View>
      {/* </Center> */}
    </NativeBaseProvider>
  );
}



export default App;
