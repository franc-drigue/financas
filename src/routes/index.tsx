import { View, Text } from 'react-native'
import React from 'react'
import AuthRoutes from './auth.routes';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native';


export default function RouteIndex() {

  const loading = false;
  const signIn = false

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar/>
      <NavigationContainer>
        {signIn ? <View></View> : <AuthRoutes/>}
      </NavigationContainer>
    </SafeAreaView>
  )
}