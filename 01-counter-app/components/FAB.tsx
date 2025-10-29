import { Pressable, StyleSheet, Text } from "react-native"

type Props = {
    label: string;
    position?: 'right' | 'left';
    onPress?: ()=> void;
    onLongPress?: ()=> void;
}

const FAB = ({ label, onPress, onLongPress, position = 'right' }:Props) => {
    return (
        <Pressable
            style={ ({ pressed })=>
                [
                    styles.floatingBtn, position === 'right' ? styles.floatingBtnRight : styles.floatingBtnLeft,
                    pressed ? { opacity: 0.5 } : { opacity: 1 }
                ] 
            }
            onPress={ onPress }
            onLongPress={ onLongPress }
        >
            <Text>{ label }</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    floatingBtn: {
        position: 'absolute',
        bottom: 25,
        backgroundColor: '#f1b2d2',
        padding: 10,
        minWidth: 50,
        minHeight: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5
    },
    floatingBtnRight: {
        right: 25,
    },
    floatingBtnLeft: {
        left: 25,
    }
})

export { FAB }