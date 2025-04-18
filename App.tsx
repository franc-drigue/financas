import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

export default function App (){
  return(
    <NavigationContainer>
       <StatusBar/>
    </NavigationContainer>
  )
}