import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListaAluno from './components/ListaAluno'
import FormAluno from './components/FormAluno'

export default function App() {
  return (
    <View style={styles.container}>
      <FormAluno/>
      <ListaAluno/>
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
});
