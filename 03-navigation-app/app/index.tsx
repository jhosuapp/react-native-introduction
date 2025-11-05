import { Link, Redirect } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {

    return <Redirect href={'/home'} />

    // return (
    //     <SafeAreaView>
    //         <View>
    //             <Text className='text-2xl font-work-bold text-primary'>Hola mundo</Text>
    //             <Text className='text-2xl font-work-bold text-secondary-default'>Hola mundo</Text>
    //             <Link href={'/products'}>
    //                 Productos
    //             </Link>
    //         </View>
    //     </SafeAreaView>
    // )
}

export default App;