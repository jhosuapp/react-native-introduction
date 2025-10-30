import { Pressable, Text } from 'react-native';
import * as Haptics from 'expo-haptics';

import { Colors } from '@/constants/theme';
import { globalStyles } from '@/styles/global-styles';

type Props = {
    label: string;
    color?: string;
    blackText?: boolean;
    doubleSize?: boolean;
    onPress: () => void;
}

const CalculatorBtn = ({ 
    label, 
    color = Colors.darkGray, 
    blackText = false, 
    doubleSize = false, 
    onPress 
}:Props) => {
    return (
        <Pressable 
            style={ ({pressed}) => [ 
                globalStyles.button,
                { backgroundColor: color },
                pressed ? { opacity: 0.8 } : { opacity: 1 },
                doubleSize && { width: 180 }
            ] }
            onPress={ ()=> {
                Haptics.selectionAsync();
                onPress();
            } }
        >
            <Text 
                style={ [
                    globalStyles.buttonText,
                    blackText ? {color: Colors.darkGray} : {color: Colors.textPrimary}
                ] }
            >
                { label }
            </Text>
        </Pressable>
    )
}

export { CalculatorBtn }