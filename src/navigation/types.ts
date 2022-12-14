import type { NativeStackNavigationProp } from '@react-navigation/native-stack';


//type checks for Stack Root
export type RootNavigatorList = {
  HomeMenu:undefined;
  Auth:undefined;
  SplashScreen:undefined;
  };


export type HomeStackNavigatorParamList = {
    HomeScreenPage: undefined;
    Details: {
      name: string;
    };
    CategoryCourse:{
        title:string
    };
    HomeMenu:{
        title:string
    };
    DetailProduct:{
        title:string
    };
    RecomendationProduct:{
        title:string
    };
  };


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
      LoginUser:undefined;
      RegisterUser:undefined;
      ForgotPassword:{
        title:string
    };
  };


  //   type checks for screens
  export type RootNavigation = NativeStackNavigationProp<RootNavigatorList,'HomeMenu'>;
  export type AuthNavigation = NativeStackNavigationProp<AuthNavigatorParamList,'LoginUser'>;
  export type HomeScreenNavigation = NativeStackNavigationProp<HomeStackNavigatorParamList,'HomeScreenPage'>;
  export type ProfileNavigation = NativeStackNavigationProp<MyProfileNavigatorParamList,'MyProfile'>;
  export type CourseNavigation = NativeStackNavigationProp<MyCourseNavigatorParamList,'Mycourse'>;