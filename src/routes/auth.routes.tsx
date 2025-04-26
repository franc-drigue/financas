import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <>
   <StatusBar backgroundColor={'#f0f0f0'} barStyle={"dark-content"}/>
   <Stack.Navigator screenOptions={{
    headerTitleStyle: {
      color: '#fff'
    },
   }}>
        <Stack.Screen
          name="SignIn" 
          component={SignIn}
          options={{
            headerShown: false
          }}
        />
         <Stack.Screen
          name="SignUp" 
          component={SignUp}
          options={{
            title: "Voltar",
            headerStyle: {
              backgroundColor: "#1ED884",
            },
            headerTintColor: "#fff",
          }}
        />
    </Stack.Navigator>
    </>
  )
}