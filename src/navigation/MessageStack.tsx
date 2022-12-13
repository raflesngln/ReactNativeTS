import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MessageNavigatorParamList } from './types';

import MessageScreen from '../screens/message/MessageScreen';
import DetailMessageScreen from '../screens/message/MessageDetailScreen';


const Message = createNativeStackNavigator<MessageNavigatorParamList>(); // checking type for name stack & types params
const MessageNavigator = () => {
  return (
    <Message.Navigator 
        screenOptions={{
            headerShown: false,
            contentStyle:{
                backgroundColor:'#ebedf0',
                zIndex:999
              },
        }}
        initialRouteName="MessagePage"
    >
      <Message.Screen name="MessagePage" component={MessageScreen} />
      <Message.Screen name="DetailMessage" component={DetailMessageScreen} />

    </Message.Navigator>
  );
};

export default MessageNavigator;