import { 
  View, 
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native'
import { styles } from './styles'
import Icon from "@react-native-vector-icons/fontawesome6";
import React from 'react'

export default function Register() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar</Text>

      <TextInput
       style={styles.inputs}
       placeholder='Nome'
      />
      <TextInput
       style={styles.inputs}
       placeholder='Valor desejado'
      />

      <View style={styles.containerButton}>
        <TouchableOpacity
         activeOpacity={0.8} 
         style={[styles.buttons, {backgroundColor: "#fff", borderColor: "#00008B", borderWidth: 1}]}
         >
          <Icon name='arrow-up' size={20} iconStyle='solid'/>
          <Text style={{fontSize: 20}}>Receita</Text>
        </TouchableOpacity>
         <TouchableOpacity 
         activeOpacity={0.8}
         style={[styles.buttons, {backgroundColor: '#D3D3D3'}]}
         >
          <Icon name='arrow-down' size={20} iconStyle='solid'/>
          <Text style={{fontSize: 20}}>Despesa</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
      activeOpacity={0.8}
      style={styles.buttonRegister}>
        <Text style={styles.textButton}>Registrar</Text>
      </TouchableOpacity>
    </View>
  )
}