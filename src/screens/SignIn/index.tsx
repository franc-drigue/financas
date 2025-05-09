import { 
  View, 
  Text, 
  KeyboardAvoidingView, 
  Image,
  TextInput,
  TouchableOpacity,
  Platform
} from 'react-native';
import React,{useState, useContext} from 'react';
import {styles} from "./styles";
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../../contexts/auth';


export default function SignIn() {
  const navegation = useNavigation<any>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {handleSignIn} = useContext(AuthContext)

 function handleLogin() {
  if(email === "" || password === "") return;
  handleSignIn(email, password);
 }


  return (
    <View style={styles.background}>
      <KeyboardAvoidingView
       enabled
       behavior={Platform.OS == "ios" ? "padding" : 'height'}
      >
        <Image 
            source={require("../../../assets/finances.png")} 
            resizeMode="contain" 
            style={styles.image}
          /> 
        <View style={styles.containerInputs}>
          <TextInput
            value={email}
            onChangeText={(value) => setEmail(value)}
            style={styles.input}
            placeholder='E-mail'
          />
            <TextInput
            value={password}
            onChangeText={(value) => setPassword(value)}
            style={styles.input}
            placeholder='Senha'
          />
        </View>

        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleLogin}>
          <Text style={styles.textButton}>
            Entrar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navegation.navigate("SignUp")}>
          <Text style={styles.singUp}>
            Cadastre-se
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}