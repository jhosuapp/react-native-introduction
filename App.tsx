import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={ styles.titleXl }>{ count }</Text>
      <Pressable 
        style={ styles.floatingBtn }
        onPress={ ()=> setCount(count + 1) }
        onLongPress={ ()=> setCount(0) }
      >
        <Text>+1</Text>
      </Pressable>
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
  floatingBtn: {
    position: 'absolute',
    right: 25,
    bottom: 25,
    backgroundColor: '#f1b2d2',
    padding: 10,
    minWidth: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5
  }
});
