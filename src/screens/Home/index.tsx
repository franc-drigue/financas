import { 
    View, 
    Text,
    ScrollView
} from "react-native"
import { styles } from "./styles";
import Cards from "../../components/cards";

export default function Home() {
    return (
       <View style={styles.conatiner}>
         <ScrollView 
           horizontal
           showsHorizontalScrollIndicator={false}
           style={styles.containerCards}
         >
           <Cards/>
           <Cards/>
         </ScrollView>
         <View style={styles.containerMoviments} >
           <Text>Home</Text>
         </View>
       </View>
    )
}