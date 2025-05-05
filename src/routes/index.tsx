import { View } from 'react-native';
import React from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import AuthProvider from '../../contexts/auth';


export default function RouteIndex() {

  const loading = false;
  const signIn = false

  return (
    <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <AuthProvider>
          {signIn ? <AppRoutes/> : <AuthRoutes/>}
          </AuthProvider>
        </NavigationContainer>
    </SafeAreaView>
  )
}