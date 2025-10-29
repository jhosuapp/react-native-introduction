import { Colors } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    background: {
        backgroundColor: Colors.background, 
        flex: 1
    },
    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 30
    },
    mainResult: {
        fontSize: 70,
        color: Colors.textPrimary,
        fontWeight: 400,
        textAlign: 'right',
        fontFamily: 'SpaceMono'
    },
    subResult: {
        color: Colors.textSecondary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: 300,
        fontFamily: 'SpaceMono'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 16,
        paddingHorizontal: 10

    },
    button: {
        width: 80,
        height: 80,
        backgroundColor: Colors.darkGray,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        borderRadius: 100
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: Colors.textPrimary,
        fontWeight: 300,
        fontFamily: 'SpaceMono'
    }
});