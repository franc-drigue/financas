import React, {
  createContext, 
  useState, 
} from "react";
import { fetchClient } from '../utils/httpClient';
import { useNavigation } from "@react-navigation/native";

type Auth = {
 handleRegisterUser: (name: string, email: string, password: string) => void
}

export const AuthContext = createContext({} as Auth);

export default function AuthProvider({children}: {children: React.ReactNode}){
      const [user, setUser] = useState(null);
      const navigation = useNavigation<any>()

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
    return (
        <AuthContext.Provider value={{
          handleRegisterUser
      }}>
          {children}
        </AuthContext.Provider>
    )
}


