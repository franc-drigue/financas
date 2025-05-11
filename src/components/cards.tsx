import { 
  View, 
  Text,
  StyleSheet
} from 'react-native'
import React from 'react'

type CardProps = {
  value: string;
  label: string;
  backgroundColor: string;
}

export default function Cards() {
  return (
    <View style={[{backgroundColor: "#228B22"}, styles.card]}>
      <Text style={styles.title}>cards</Text>
      <Text style={styles.value}>R$ 500</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   card: {
     borderRadius: 8,
     width: 300,
     paddingHorizontal: 10,
     justifyContent: "center",
     marginHorizontal: 5
   },

   title: {
     fontWeight: "bold",
     fontSize: 18,
     color: '#fff'
   },

   value: {
     fontWeight: "bold",
     fontSize: 20,
     color: '#fff'
   }
})

