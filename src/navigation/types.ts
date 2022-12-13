import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type HomeStackNavigatorParamList = {
    HomeScreenPage: undefined;
    Details: {
      name: string;
    };
    CategoryCourse:{
        title:string
    };
    DetailProduct:{
        title:string
    };
    RecomendationProduct:{
        title:string
    };
  };


//   type checks for screens
  export type HomeScreenNavigationProp = NativeStackNavigationProp<HomeStackNavigatorParamList,'HomeScreenPage'>;


//   type checks for screens Bottom Navigations
export type BottomTabNavigatorParamList = {
    Home: HomeStackNavigatorParamList;
    MyCourse: undefined;
    Message: undefined;
    Profile: undefined;
  };

//type checks for Stack My Course
export type MyCourseNavigatorParamList = {
  Mycourse: {
    title:string
  };
    DetailCourse: {
      title:string
    };
  };
  
//type checks for Stack My Course
export type MessageNavigatorParamList = {
  MessagePage:{
      title:string
    };
    DetailMessage:{
      title:string
  };
  };

  
  //type checks for Stack BProfile Setttings
  export type MyProfileNavigatorParamList = {
    MyProfile:{
      title:string
    };
    DetailUser: {
      title:string
    };
    LogoutApp: {
      title:string
    };
  };
      //type checks for Stack My Course
    export type AuthNavigatorParamList = {
      LoginUser:{
          title:string
        };
        RegisterUser:{
          title:string
      };
      };