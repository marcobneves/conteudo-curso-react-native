import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ListaAluno from './ListaAluno'
import FormAluno from './FormAluno'

export default class TelaLivro extends Component {
    constructor() {
        super();
        this.state = {
            atualizaLista: false,
            atualizaAluno: false,
            alunoEdicao:{},
            edicao: false
        }
    }

    atualizarLista = () => {
        this.setState({ atualizaLista: true });
    }

    atualizarAluno = (aluno) => {
        console.log(aluno);
        this.setState({edicao:true});
        this.setState({alunoEdicao:aluno});
        this.setState({ atualizaAluno: true });
    }
    formPadrao = () => {
        this.setState({edicao:false});
        this.setState({alunoEdicao:{}});
    }     

    render() {
        return (
            <View style={styles.container}>
                <FormAluno 
                formPadrao ={this.formPadrao}
                edicao={this.state.edicao}
                alunoEdicao={this.state.alunoEdicao}
                atualizarLista={this.atualizarLista}
                atualizaAluno={this.atualizaAluno}
                />
                <ListaAluno 
                    atualizaLista={this.state.atualizaLista}
                    atualizarAluno={this.atualizarAluno}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
