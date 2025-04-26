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
import {styles} from "./styles"


export default function SignIn() {
  return (
    <View style={styles.background}>
      <KeyboardAvoidingView
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

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>
            Entrar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.singUp}>
            Cadastre-se
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}