import { 
  View, 
  Text,
  StatusBar,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Platform
} from 'react-native';
import { useState,   useContext} from 'react';
import { styles } from './styles';
import React from 'react';
import { AuthContext } from '../../../contexts/auth';


export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleRegisterUser } = useContext(AuthContext);

 function handleSignUp () {
  
  if(name === "" || email === "" || password === "") {
    return
  }

   handleRegisterUser(name, email, password);
   setEmail("");
   setName("");
   setPassword("");
 }

  return (
    <View style={styles.background}>
      <StatusBar backgroundColor={'#1ED884'} barStyle={"light-content"}/>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS == "ios" ? "padding" : 'height'}
      >
         <View style={styles.containerInputs}>
           <TextInput
              value={name}
              onChangeText={(value) => setName(value)}
              style={styles.input}
              placeholder='Seu nome'
            />
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
        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleSignUp}>
            <Text style={styles.textButton}>
              Cadastrar
            </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}