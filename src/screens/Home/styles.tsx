import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    conatiner: {
        flex: 1
    },

    containerCards: {
        paddingVertical: 10,
    },

    containerMoviments: {
        flex: 5,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 10
    },

    containerOldsMoviments: {
       flexDirection: "row",
       alignItems: "center",
       gap: 4,
       paddingHorizontal: 5,
       marginBottom: 10
    },

    oldsMoviments: {
        fontSize: 17,
        fontWeight: "bold"
    }
})