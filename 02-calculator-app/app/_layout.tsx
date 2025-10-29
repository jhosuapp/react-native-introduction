import 'react-native-reanimated';
import { useFonts } from 'expo-font';

import { Text, View } from 'react-native';
import { Slot } from 'expo-router';

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View>
      <Text>Hola</Text>

      <Slot />
    </View>
  );
}

export default RootLayout;