import React, {
  createContext, 
  useState, 
} from "react";
import { fetchClient } from '../utils/httpClient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KEYS } from "../consts/keys";


type Auth = {
 handleRegisterUser: (name: string, email: string, password: string) => void
}

export const AuthContext = createContext({} as Auth);

export default function AuthProvider({children}: {children: React.ReactNode}){
  
      const handleRegisterUser =  async (name: string, email: string, password: string) => {
         try {
          const data = await fetchClient.post("/users", {
            name,
            password,
            email
          })
    
          if(data.id) {
            await AsyncStorage.setItem(KEYS.AUTH_TOKEN, data.id)
          }
    
         }catch(error) {
          console.log(error)
         }
      }
    return (
        <AuthContext.Provider value={{
          handleRegisterUser
      }}>
          {children}
        </AuthContext.Provider>
    )
}


