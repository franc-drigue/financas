import 'react-native-gesture-handler';
import RouteIndex from "./src/routes/index";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import AuthProvider from './contexts/auth';


export default function App() {
  return  (
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer >
           <AuthProvider>
             <RouteIndex/>
           </AuthProvider>
          </NavigationContainer>
      </SafeAreaView>
 )
}