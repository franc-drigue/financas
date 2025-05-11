import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';

const Drawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <Drawer.Navigator
     screenOptions={{
      headerStyle: {
        elevation: 0,
      },
      headerTitle: "Minhas movimentações",
     }}
    >
      <Drawer.Screen 
      name='Home' 
      component={Home}
      options={{
        headerTitleStyle: {
          fontWeight: "light",
          fontSize: 16
        }
      }}
      />
    </Drawer.Navigator>
  )
}