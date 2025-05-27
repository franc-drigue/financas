import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer/CustomDrawer';
import Icon from "@react-native-vector-icons/fontawesome6";
import Home from '../screens/Home';
import Register from '../screens/Register';
import MyPerfil from '../screens/MyPerfil';

const Drawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <Drawer.Navigator
     drawerContent={(props) => <CustomDrawer {...props}/>}
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
        drawerLabel: "Início",
        drawerIcon: ({size, color}) => <Icon name='house' iconStyle='solid' size={size} color={color}/>,
        headerTitleStyle: {
          fontWeight: "light",
          fontSize: 16
        }
      }}
      />

       <Drawer.Screen 
        name='Register' 
        component={Register}
        options={{
          drawerLabel: "Register",
          drawerIcon: ({size, color}) => <Icon name='cash-register' iconStyle={"solid"} size={size} color={color}/>,
          headerTitleStyle: {
            fontWeight: "light",
            fontSize: 16
          }
        }}
      />

      <Drawer.Screen 
        name='Meu Perfil' 
        component={MyPerfil}
        options={{
          drawerLabel: "Meu perfil",
          drawerIcon: ({size, color}) => <Icon name='user-large' iconStyle={"solid"} size={size} color={color}/>,
          headerTitleStyle: {
            fontWeight: "light",
            fontSize: 16
          }
        }}
      />
    </Drawer.Navigator>
  )
}