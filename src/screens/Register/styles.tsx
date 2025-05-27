import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        marginTop: 60
    },

    title: {
        fontSize: 25,
        fontWeight: "700",
        marginBottom: 18
    },

    inputs: {
        backgroundColor: "#fff",
        borderRadius: 5,
        marginBottom: 17,
        paddingLeft: 13,
    },

    containerButton: {
        flexDirection: "row",
        gap: 10,
        marginBottom: 17,
    },

    buttons: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 15,
        paddingHorizontal: 26,
        paddingVertical: 10,
        borderRadius: 5
    },
    
    buttonRegister: {
        backgroundColor: "#00B94A",
        borderRadius: 5,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center"
    },

    textButton: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "500"
    }
})