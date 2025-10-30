import 'react-native-reanimated';
import { Platform, View } from 'react-native';
import { useFonts } from 'expo-font';

import { StatusBar } from 'expo-status-bar';
import { Slot } from 'expo-router';
import * as NavigationBar from 'expo-navigation-bar';

import { globalStyles } from '@/styles/global-styles';

const isAndroid = Platform.OS === 'android';
isAndroid && NavigationBar.setBackgroundColorAsync('black');

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={ globalStyles.background }>
      <Slot />
      <StatusBar style='light' />
    </View>
  );
}

export default RootLayout;