import { CustomText } from "@/components/CustomText";
import { globalStyles } from "@/styles/global-styles";
import { Text, View } from "react-native";

const CalculatorApp = () => {
    return (
        <View style={ globalStyles.calculatorContainer }>
            <CustomText variant="h1">50 x 400</CustomText>
            <CustomText variant="h2">20000</CustomText>
        </View>
    )
}

export default CalculatorApp;