import type { NativeStackNavigationProp } from '@react-navigation/native-stack';



export type HomeStackNavigatorParamList = {
    Home: undefined;
    Details: {
      name: string;
      birthYear: string;
    };
    About:{
        title:string
    };
  };


//   type checks for screens
  export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'Details',
  'About'
>;

//   type checks for screens Bottom Navigations
export type BottomTabNavigatorParamList = {
    Home: HomeStackNavigatorParamList;
    Feed: undefined;
    Settings: undefined;
  };