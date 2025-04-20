import { View, Text } from 'react-native'
import React from 'react'
import AuthRoutes from './auth.routes';


export default function RouteIndex() {

  const loading = false;
  const signIn = false

  return (
      signIn ? <View></View> : <AuthRoutes/>
  )
}