import { 
    View, 
    Text,
    StyleSheet 
} from 'react-native';
import React from 'react';
import Icon from "@react-native-vector-icons/fontawesome6";



export default function CardMoviment() {
  return (
    <View style={styles.container}>
      <View style={styles.status}>
        <Icon name='arrow-down' iconStyle='solid' color={"#fff"}/>
        <Text style={{color: "#fff"}}>despesa</Text>
      </View>
      <Text style={{fontSize: 20, fontWeight: "400"}}>R$ 250</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F0F8FF",
        padding: 10,
        borderRadius: 8,
        elevation: 1,
        borderColor: "#F5F5F5",
        borderWidth: 1
    },

    status: {
        backgroundColor: "#FF0000",
        width: 90,
        borderRadius: 5,
        flexDirection: "row",
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        marginBottom: 6
    }
})