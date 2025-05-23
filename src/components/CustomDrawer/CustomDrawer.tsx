import { DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps } from "@react-navigation/drawer";
import { Text, View } from "react-native";
import { Image } from "react-native";
import { styles } from "./styles";

export default function CustomDrawer(props: DrawerContentComponentProps ) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
         style={styles.image}
         source={require("../../../assets/finances_drawer.png")}
         resizeMode="center"
        />
        <Text style={styles.welcome}>
            Bem-vindo
        </Text>
        <Text style={styles.user}>
            Rodrigues
        </Text>
      </View>
      <DrawerContentScrollView {...props}>
       <DrawerItemList {...props}/>
      </DrawerContentScrollView>
    </View>
  )
}