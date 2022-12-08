import type { NativeStackNavigationProp } from '@react-navigation/native-stack';



export type HomeStackNavigatorParamList = {
    Home: undefined;
    Details: {
      name: string;
      birthYear: string;
    };
    Settings:{
        title:string
    };
    Tracking:{
        title:string
    };
    DetailProduct:{
        title:string
    };
    RecomendationProduct:{
        title:string
    };
    Login:{
        title:string
    };
  };


//   type checks for screens
  export type HomeScreenNavigationProp = NativeStackNavigationProp<HomeStackNavigatorParamList,'Settings'>;


//   type checks for screens Bottom Navigations
export type BottomTabNavigatorParamList = {
    Home: HomeStackNavigatorParamList;
    Tracking: undefined;
    Message: undefined;
    Settings: undefined;
  };

  //   type checks for screens Bottom Navigations
export type SettingsNavigatorParamList = {
    Home: HomeStackNavigatorParamList;
    Login: undefined;
  };