import React, {
  createContext, 
  useState, 
} from "react";
import { fetchClient } from '../utils/httpClient';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KEYS } from "../consts/keys";

type User = {
  name: string;
}

export type RootStackParamList = {
  Home: undefined;
  SignIn: undefined;
};

type Auth = {
 handleRegisterUser: (name: string, email: string, password: string) => void;
 handleSignIn: (email: string, password: string) => void;
 signed: boolean;
}

export const AuthContext = createContext({} as Auth);

export default function AuthProvider({children}: {children: React.ReactNode}){
      const [user, setUser] = useState<User | null>(null);
      const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

      const handleRegisterUser =  async (name: string, email: string, password: string) => {
         try {
         await fetchClient.post("/users", {
            name,
            password,
            email
          })

          navigation.navigate("SignIn");
   
         }catch(error) {
          console.log(error);
         }
      }

      async function handleSignIn(email: string, password: string) {
        try {
          const data = await fetchClient.post("/login", {
            email,
            password
         })

         setUser({
          name: data.name,
         });
    
         if(data.token) {
            await AsyncStorage.setItem(KEYS.AUTH_TOKEN, data.token);
         }
    
         navigation.navigate("Home");

        }catch(error) {
          console.log(error)
        }
  }


    return (
        <AuthContext.Provider value={{
          signed: !!user,
          handleRegisterUser,
          handleSignIn
      }}>
          {children}
        </AuthContext.Provider>
    )
}


