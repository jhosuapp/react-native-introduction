import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FAB } from './components/FAB';

export default function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={ styles.titleXl }>{ count }</Text>
      <FAB
        label='+1'
        onPress={ ()=> setCount(count + 1) }
        onLongPress={ ()=> setCount(0) }
      />
      <FAB
        label='Reset'
        onPress={ ()=> setCount(0) }
        position='left'
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleXl: {
    fontSize: 150,
    fontWeight: 200,
  },
});
