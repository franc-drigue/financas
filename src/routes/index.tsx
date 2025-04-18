import { View, Text } from 'react-native';
import React from 'react';
import StackAuth from './auth.route';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

export default function RouterIndex() {
 const loading = false
 const SignIn = false
  return (
    <NavigationContainer>
       <StatusBar/>
       {
         SignIn ? 
         <View></View> 
         : 
         <StackAuth/>
       }
    </NavigationContainer>
  )
}