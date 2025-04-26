import { 
  View, 
  Text,
  StatusBar,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Platform
} from 'react-native'
import { styles } from './styles'
import React from 'react'

export default function SignUp() {
  return (
    <View style={styles.background}>
      <StatusBar backgroundColor={'#1ED884'} barStyle={"light-content"}/>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS == "ios" ? "padding" : 'height'}
      >
         <View style={styles.containerInputs}>
           <TextInput
              style={styles.input}
              placeholder='Seu nome'
            />
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
              Cadastrar
            </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}