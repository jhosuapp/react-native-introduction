import 'react-native-reanimated';
import { View } from 'react-native';
import { useFonts } from 'expo-font';

import { StatusBar } from 'expo-status-bar';
import { Slot } from 'expo-router';
import { Colors } from '@/constants/theme';

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ backgroundColor: Colors.background, flex: 1 }}>
      <Slot />
      <StatusBar style='light' />
    </View>
  );
}

export default RootLayout;