import { CalculatorBtn } from "@/components/CalculatorBtn";
import { CustomText } from "@/components/CustomText";
import { Colors } from "@/constants/theme";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global-styles";
import { Text, View } from "react-native";

const CalculatorApp = () => {

    const {
        buildNumber,
        formula,
        clearNumber,
        toggleSign,
        deleteLast
    } = useCalculator();

    return (
        <View style={ globalStyles.calculatorContainer }>
            {/* Results */}
            <View style={{ paddingHorizontal: 32, paddingBottom: 24 }}>
                <CustomText variant="h1">{ formula }</CustomText>
                <CustomText variant="h2">20000</CustomText>
            </View>

            {/* Buttons */}
            <View style={ globalStyles.row }>
                <CalculatorBtn 
                    label='c' 
                    onPress={ ()=> clearNumber() } 
                    blackText
                    color={ Colors.lightGray }
                />
                <CalculatorBtn 
                    label='+/-' 
                    onPress={ toggleSign } 
                    blackText
                    color={ Colors.lightGray }
                />
                <CalculatorBtn 
                    label='del' 
                    onPress={ deleteLast } 
                    blackText
                    color={ Colors.lightGray }
                />
                <CalculatorBtn 
                    label='÷' 
                    onPress={ ()=> console.log('hola') } 
                    color={ Colors.orange }
                />
            </View>
            <View style={ globalStyles.row }>
                <CalculatorBtn 
                    label='7' 
                    onPress={ ()=> buildNumber('7') } 
                />
                <CalculatorBtn 
                    label='8' 
                    onPress={ ()=> buildNumber('8') } 
                />
                <CalculatorBtn 
                    label='9' 
                    onPress={ ()=> buildNumber('9') } 
                />
                <CalculatorBtn 
                    label='x' 
                    onPress={ ()=> console.log('hola') } 
                    color={ Colors.orange }
                />
            </View>
            <View style={ globalStyles.row }>
                <CalculatorBtn 
                    label='4' 
                    onPress={ ()=> buildNumber('4') } 
                />
                <CalculatorBtn 
                    label='5' 
                    onPress={ ()=> buildNumber('5') } 
                />
                <CalculatorBtn 
                    label='6' 
                    onPress={ ()=> buildNumber('6') } 
                />
                <CalculatorBtn 
                    label='-' 
                    onPress={ ()=> console.log('hola') } 
                    color={ Colors.orange }
                />
            </View>
            <View style={ globalStyles.row }>
                <CalculatorBtn 
                    label='1' 
                    onPress={ ()=> buildNumber('1') } 
                />
                <CalculatorBtn 
                    label='2' 
                    onPress={ ()=> buildNumber('2') } 
                />
                <CalculatorBtn 
                    label='3' 
                    onPress={ ()=> buildNumber('3') } 
                />
                <CalculatorBtn 
                    label='+' 
                    onPress={ ()=> console.log('hola') } 
                    color={ Colors.orange }
                />
            </View>

            <View style={ globalStyles.row }>
                <CalculatorBtn 
                    label='0' 
                    doubleSize
                    onPress={ ()=> buildNumber('0') } 
                />
                <CalculatorBtn 
                    label='.' 
                    onPress={ ()=> buildNumber('.') } 
                />
                <CalculatorBtn 
                    label='=' 
                    onPress={ ()=> console.log('hola') } 
                    color={ Colors.orange }
                />
            </View>
        </View>
    )
}

export default CalculatorApp;