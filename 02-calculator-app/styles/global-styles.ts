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
        textAlign: 'right'
    },
    subResult: {
        color: Colors.textSecondary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: 300
    }
});