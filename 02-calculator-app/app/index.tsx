import { CalculatorBtn } from "@/components/CalculatorBtn";
import { CustomText } from "@/components/CustomText";
import { Colors } from "@/constants/theme";
import { globalStyles } from "@/styles/global-styles";
import { Text, View } from "react-native";

const CalculatorApp = () => {
    return (
        <View style={ globalStyles.calculatorContainer }>
            {/* Results */}
            <View style={{ paddingHorizontal: 32, paddingBottom: 24 }}>
                <CustomText variant="h1">50 x 400</CustomText>
                <CustomText variant="h2">20000</CustomText>
            </View>

            {/* Buttons */}
            <View style={ globalStyles.row }>
                <CalculatorBtn 
                    label='c' 
                    onPress={ ()=> console.log('hola') } 
                    blackText
                    color={ Colors.lightGray }
                />
                <CalculatorBtn 
                    label='+/-' 
                    onPress={ ()=> console.log('hola') } 
                    blackText
                    color={ Colors.lightGray }
                />
                <CalculatorBtn 
                    label='del' 
                    onPress={ ()=> console.log('hola') } 
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
                    onPress={ ()=> console.log('hola') } 
                />
                <CalculatorBtn 
                    label='8' 
                    onPress={ ()=> console.log('hola') } 
                />
                <CalculatorBtn 
                    label='9' 
                    onPress={ ()=> console.log('hola') } 
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
                    onPress={ ()=> console.log('hola') } 
                />
                <CalculatorBtn 
                    label='5' 
                    onPress={ ()=> console.log('hola') } 
                />
                <CalculatorBtn 
                    label='6' 
                    onPress={ ()=> console.log('hola') } 
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
                    onPress={ ()=> console.log('hola') } 
                />
                <CalculatorBtn 
                    label='2' 
                    onPress={ ()=> console.log('hola') } 
                />
                <CalculatorBtn 
                    label='3' 
                    onPress={ ()=> console.log('hola') } 
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
                    onPress={ ()=> console.log('hola') } 
                />
                <CalculatorBtn 
                    label='.' 
                    onPress={ ()=> console.log('hola') } 
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