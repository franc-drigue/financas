import { 
    View, 
    Text,
    ScrollView,
    TouchableOpacity
} from "react-native"
import { styles } from "./styles";
import CardMovimentHeader from "../../components/Cards/CardMovimentHeader";
import Icon from "@react-native-vector-icons/fontawesome6";
import CardMoviment from "../../components/Cards/CardMoviment";


export default function Home() {
    return (
       <View style={styles.conatiner}>
         <ScrollView 
           horizontal
           showsHorizontalScrollIndicator={false}
           style={styles.containerCards}
         >
           <CardMovimentHeader/>
           <CardMovimentHeader/>
         </ScrollView>
         <View style={styles.containerMoviments}>
           <TouchableOpacity style={styles.containerOldsMoviments}>
              <Icon name="calendar" size={25}/>
              <Text style={styles.oldsMoviments}>Ultimos movimentos</Text>
           </TouchableOpacity>
           <CardMoviment/>
         </View>
       </View>
    )
}