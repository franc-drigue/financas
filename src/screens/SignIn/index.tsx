import { 
  View, 
  Text, 
  KeyboardAvoidingView, 
  Image,
  TextInput,
  TouchableOpacity,
  Platform
} from 'react-native';
import React from 'react';
import {styles} from "./styles";
import { useNavigation } from '@react-navigation/native';


export default function SignIn() {

  const navegation = useNavigation<any>()

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
            style={styles.input}
            placeholder='E-mail'
          />
            <TextInput
            style={styles.input}
            placeholder='Senha'
          />
        </View>

        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
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