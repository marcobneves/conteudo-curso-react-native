import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { ThemeProvider, ListItem } from 'react-native-elements';

export default class ListaAluno extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lista: [],
            isLoading: false
        }
    }

    componentWillReceiveProps() {
        this.listagem()
    }

    listagem() {
        this.loading(true);
        let url = "http://5d123a8084e9060014576aeb.mockapi.io/aluno";
        fetch(url).then(response => {
            return response.json();
        })
            .then(data => {
                this.setState({ lista: data })
                this.loading(false);

            })
            .catch(error => {
                this.setState({ error: true });
            })
    }

    loading = (valor) => {
        this.setState({isLoading:valor})
    }

    componentWillMount() {
        this.listagem()
    }

    remover(id) {
        let url = "http://5d123a8084e9060014576aeb.mockapi.io/aluno/" + id;
        fetch(url, {
            method: 'DELETE',
        }).then(response => {
            console.log('ALUNO REMOVIDO');
            this.listagem();
        }).then(data => {
            console.log('Created Gist:', data);
        })
    }

    atualizar = (aluno) => {
        this.props.atualizarAluno(aluno);
    }

    selecao = (aluno) => {
        console.log('SELECAO DE ALUNO', aluno);
        Alert.alert(
            'Atenção',
            'O que deseja fazer?',
            [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Remover',
                    onPress: () => this.remover(aluno.id)
                },
                {
                    text: 'Atualizar',
                    onPress: () => this.atualizar(aluno)
                },
            ],
            { cancelable: true },
        );
    }

    render() {
        return (
            <ThemeProvider>
                {
                    this.state.isLoading && (
                        <ActivityIndicator size="large" color="#ccc"/>
                    )
                }

                <View style={{ height: 360 }}>
                    <ScrollView>
                        {
                            this.state.lista.map((aluno, i) => (
                                <ListItem
                                    key={i}
                                    title={aluno.nome + ' ' + aluno.sobrenome}
                                    subtitle={aluno.idade + ' anos'}
                                    onPress={() => this.selecao(aluno)}
                                    // rightElement={this.botoes(aluno)}
                                    rightIcon={{ name: 'keyboard-arrow-right' }}
                                />
                            ))
                        }

                    </ScrollView>
                </View>
            </ThemeProvider>
        )
    }
}