import React, { Component } from 'react';
import { StyleSheet, Text, View, Keyboard} from 'react-native';
import { ThemeProvider, Input, Button } from 'react-native-elements';

export default class FormAluno extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            sobrenome: '',
            idade: '',
            validacao: false
        }
    }
    componentWillReceiveProps(props){
        this.setState({nome: props.alunoEdicao.nome});
        this.setState({sobrenome: props.alunoEdicao.sobrenome});
        this.setState({idade: props.alunoEdicao.idade});
    }

    atualizacao = () => {
        console.log('METODO ATUALIZAR', this.props.alunoEdicao.id);
        let url = "http://5d123a8084e9060014576aeb.mockapi.io/aluno/" + this.props.alunoEdicao.id;
        fetch(url, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                nome: this.state.nome, 
                sobrenome:this.state.sobrenome, 
                idade: this.state.idade })
        }).then(response => {
            this.limparDados();
            this.props.atualizarLista();
            this.props.formPadrao();
            Keyboard.dismiss();
        }).then(data => {
            console.log('Created Gist:', data);
        })
    }

    Valicao = () => {
        if (this.state.nome != "") {
            this.setState({ validacao: true });
            console.log('CADASTRAR');
        } else {
            console.log('ERRO DE VALIDACAO');
        }
    }

    salvar = () => {
        // this.Valicao();
        // if (this.state.validacao) {

        console.log('metodo Salvar')
        let url = "http://5d123a8084e9060014576aeb.mockapi.io/aluno";
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome: this.state.nome, sobrenome: this.state.sobrenome, idade: this.state.idade })
        }).then(response => {
            this.limparDados();
            this.props.atualizarLista();
            Keyboard.dismiss();
        }).then(data => {
            console.log('Created Gist:', data);
        })
        // }
    }

    limparDados() {
        this.setState({ nome: '' });
        this.setState({ sobrenome: '' });
        this.setState({ idade: '' });
    }

    setNome = (nome) => {
        this.setState({ nome: nome })
    }
    setSobrenome = (sobrenome) => {
        this.setState({ sobrenome: sobrenome })
    }
    setIdade = (idade) => {
        this.setState({ idade: idade })
    }

    render() {
        return (
            <ThemeProvider>
                <Input
                    value={this.state.nome}
                    onChangeText={(nome) => this.setNome(nome)}
                    placeholder='Informe o Nome'
                />
                <Input
                    value={this.state.sobrenome}
                    onChangeText={(sobrenome) => this.setSobrenome(sobrenome)}
                    placeholder='Informe o Sobrenome'
                />
                <Input
                    value={this.state.idade}
                    onChangeText={(idade) => this.setIdade(idade)}
                    placeholder='Informe a Idade'
                />
                <Button
                    onPress={() => this.props.edicao ? this.atualizacao() : this.salvar()}
                    title={this.props.edicao? 'Atualizar' : 'Cadastrar'}
                />
            </ThemeProvider>
        )
    }
}