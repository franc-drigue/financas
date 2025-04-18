import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SingUp";

const Stack = createStackNavigator();

export default function StackAuth() {
   return (
    <Stack.Navigator>
        <Stack.Screen
           name="SignIn"
           component={SignIn}
        />
           <Stack.Screen
           name="SignUp"
           component={SignUp}
        />
    </Stack.Navigator>
   )
}