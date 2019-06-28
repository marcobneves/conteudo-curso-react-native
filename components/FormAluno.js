import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider, Input } from 'react-native-elements';

export default  class FormAluno extends Component {
    render() {
        return (
            <ThemeProvider>
                <Text>COMPONENTE FORM DE ALUNOS</Text>
                <Input
                    placeholder='Informe o Nome'
                />
                <Input
                    placeholder='Informe o Sobrenome'
                />
                <Input
                    placeholder='Informe a Idade'
                />
            </ThemeProvider>
        )
    }
}