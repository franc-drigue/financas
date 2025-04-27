import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        padding: 30,
        justifyContent: "center",
    },

    input: {
        backgroundColor: "#fff",
        width: '100%',
        borderRadius: 5,
        paddingHorizontal: 15,
        elevation: 1
    },
    
    containerInputs: {
        gap: 15
    },

    button: {
        backgroundColor: "#53DB72",
        marginTop: 20,
        padding: 10,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: 'center'
    },
    
    textButton: {
        color: '#fff',
        fontSize: 18,
        fontWeight: "800"
    },
})