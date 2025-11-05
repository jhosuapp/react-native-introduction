import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Homecreen = () => {
    return (
        <SafeAreaView className='px-5 py-10'>
            <Text className='text-5xl'>Home screen</Text>

            <View className='flex gap-2 flex-col mt-4'>
                <Link href={'/products'}>Productos</Link>
                <Link href={'/settings'}>Ajustes</Link>
                <Link href={'/profile'}>Perfil</Link>
            </View>
        </SafeAreaView>
    )
}

export default Homecreen;