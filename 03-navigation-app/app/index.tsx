import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
    return (
        <SafeAreaView>
            <View>
                <Text className='text-2xl font-work-bold'>Hola mundo</Text>
            </View>
        </SafeAreaView>
    )
}

export default App;