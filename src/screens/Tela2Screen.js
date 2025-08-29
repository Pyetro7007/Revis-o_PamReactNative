import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Image, TextInput } from 'react-native';
import Botao1 from '../components/Botao1';
import Botao2 from '../components/Botao2';
import iconeGoogle from '../../assets/Google.png';
import iconeFacebook from '../../assets/Facebook.png';
import BotaoVoltar from '../components/BotaoVoltar';

const windowWidth = Dimensions.get('window').width;

export default function Tela1({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header} />
            <View style={styles.containerBotaoVoltar}>
                <BotaoVoltar
                    aoPressionar={() => navigation.navigate('Tela1')}>
                    <Text style={{ color: '#14c871', fontSize: 48}}>{"<"}</Text>
                </BotaoVoltar>
            </View>
            <Text style={styles.acesse}>Acesse</Text>
            <Text style={styles.subtitulo}>com E-mail e senha</Text>
            
            <View style={styles.containerEmail}>
            <Text style={styles.tituloEmail}>E-mail</Text>
                <TextInput style={styles.email}
                    placeholder='Digite seu E-mail'>
                </TextInput>
            </View>
            <Text style={styles.tituloSenha}>Senha</Text>
            <View style={styles.containerEmail}>
                <TextInput style={styles.email}
                    placeholder='Digite sua senha'>
                </TextInput>
            </View>
            <View style={styles.footer}>
                <View style={styles.linhas}>
                    <View style={styles.linhaDireita} />
                    <View style={styles.linhaEsquerda} />
                    <Text style={styles.textoLinha}> Ou continue com </Text>
                </View>
                <Image source={require("../../assets/Google.png")} style={styles.icone1} />
                <Image source={require("../../assets/Facebook.png")} style={styles.icone2} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
    },
    header: {
        backgroundColor: "#dbdbdb",
        height: windowWidth * 0.1,
        width: windowWidth * 1,
        position: 'absolute',
        top: 0,
    },
    imagem: {
        resizeMode: 'contain',
        height: windowWidth * 0.7,
        width: windowWidth * 0.9,
        marginTop: 80,
    },
    acesse: {
        fontSize: 30,
        color: "#2e3e4b",
        textAlign: 'center',
        marginTop: 90,
        marginLeft: 30,
        position: 'absolute',
        left: 0,
        top: 0,
    },
    subtitulo: {
        fontSize: 12,
        color: "#2e3e4b",
        textAlign: 'center',
        marginTop: 130,
        marginLeft: 30,
        position: 'absolute',
        left: 0,
        top: 0,
    },
    containerBotaoVoltar: {
        fontSize: 30,
        color: "#2e3e4b",
        textAlign: 'center',
        marginTop: 30,
        marginLeft: 30,
        position: 'absolute',
        left: 0,
        top: 0,
    },
    tituloEmail: {
        fontSize: 12,
        color: "#2e3e4b",
        textAlign: 'center',
        position: 'absolute',
        display: 'flex',
        top: 0,
        left: 0,
    },
    containerEmail: {
        backgroundColor: '#E3E7F3',
        paddingVertical: 15,
        justifyContent: 'center',
        width: windowWidth * 0.9,
        marginTop: 20,
    },
    email: {

    },
    footer: {
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        marginBottom: 300,
    },
    linhas: {
        diplay: 'flex',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: 'center',

    },
    linhaDireita: {
        height: 1,
        backgroundColor: "#c2c2c2",
        width: windowWidth * 0.30,
        position: 'absolute',
        right: 0,
    },
    linhaEsquerda: {
        height: 1,
        backgroundColor: "#c2c2c2",
        width: windowWidth * 0.30,
        position: 'absolute',
        left: 0,
    },
    textoLinha: {
        fontSize: 12,
        textAlign: 'center',
        position: 'absolute',
        backgroundColor: '#fbfbfb'
    },
    icone1: {
        backgroundColor: "#f3f3f3",
        borderRadius: 8,
        height: 72,
        width: 72,
        resizeMode: 'contain',
        position: 'absolute',
        right: 25,
        marginTop: 50,
    },
    icone2: {
        backgroundColor: "#f3f3f3",
        borderRadius: 8,
        height: 72,
        width: 72,
        resizeMode: 'contain',
        position: 'absolute',
        left: 25,
        marginTop: 50,
    },
});