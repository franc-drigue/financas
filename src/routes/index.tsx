import { View, Text } from 'react-native'
import React from 'react'
import AuthRoutes from './auth.routes';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';


export default function RouteIndex() {

  const loading = false;
  const signIn = false

  return (
    <NavigationContainer>
        <StatusBar/>
        {signIn ? <View></View> : <AuthRoutes/>}
    </NavigationContainer>
  )
}