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
  'Details'
>;

//   type checks for screens Bottom Navigations
export type BottomTabNavigatorParamList = {
    Home: HomeStackNavigatorParamList;
    Tracking: undefined;
    Message: undefined;
    Settings: undefined;
  };