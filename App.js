import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import ListaAluno from './components/ListaAluno'
// import FormAluno from './components/FormAluno'
import TelaAluno from './components/TelaAluno'
import { Header } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FormAluno/>
      <ListaAluno/> */}
      <Header
          placement="left"
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'SYSTEM', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
      <TelaAluno/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {

  }
});
