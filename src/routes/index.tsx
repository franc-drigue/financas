import { View } from 'react-native';
import React, {useContext} from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import AuthProvider from '../../contexts/auth';
import { AuthContext } from '../../contexts/auth';


export default function RouteIndex() {

  const {signed} = useContext(AuthContext);

  const loading = false;
  const signIn = false

  return (
      signed ? <AppRoutes/> : <AuthRoutes/>
    )
}