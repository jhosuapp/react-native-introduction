import { globalStyles } from '@/styles/global-styles';
import { Text, type TextProps, } from 'react-native';

type Props = {
    variant?: 'h1' | 'h2';
} & TextProps;

const CustomText = ({ children, variant = 'h1', ...rest }:Props) => {
    return (
        <Text   
            style={[
                variant === 'h1' && globalStyles.mainResult,
                variant === 'h2' && globalStyles.subResult
            ]}
            numberOfLines={1}
            adjustsFontSizeToFit
            {...rest}
        >
            { children }
        </Text>
    )
}

export { CustomText }