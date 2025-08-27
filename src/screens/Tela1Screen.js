import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Image } from 'react-native';
import Botao1 from '../components/Botao1';
import Botao2 from '../components/Botao2';
import casual_dog from '../../assets/casual_dog.png';
import iconeGoogle from '../../assets/Google.png';

const windowWidth = Dimensions.get('window').width;

export default function Tela1({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}/>
            <Image source={require("../../assets/casual_dog.png")} style={styles.imagem} />
            <Text style={styles.titulo}>Ótimo dia!</Text>
            <Text style={styles.subtitulo}>Como deseja acessar?</Text>
            <View style={styles.containerBotao1}>
                <Botao1
                    aoPressionar={() => navigation.navigate()}>
                    <Image source={require("../../assets/Google.png")} style={styles.icone} />
                    <Text style={{ color: '#FFFFFF' }}>Como deseja acessar?</Text>
                </Botao1>
            </View>
            <View style={styles.containerBotao2}>
                <Botao2
                    aoPressionar={() => navigation.navigate('Tela2')}>
                    <Text style={{ color: '#000000' }}>Outras opções</Text>
                </Botao2>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
    },
    header: {
        backgroundColor: "#dbdbdb",
        height: windowWidth * 0.1,
        width: windowWidth * 1,
        position:'absolute',
        top: 0,
    },
    imagem: {
        resizeMode: 'contain',
        height: windowWidth * 0.7,
        width: windowWidth * 0.9,
        marginTop: 80,
    },
    titulo: {
        fontSize: 30,
        color: "#2e3e4b",
        textAlign: 'center',
        marginTop: 50,
    },
    subtitulo: {
        fontSize: 12,
        color: "#2e3e4b",
        textAlign: 'center',
        marginTop: 10,
    },
    containerBotao1: {
        flexDirection: 'row',
        alignItem: 'center',
        justifyContent: 'center',
    },
    icone: {
        backgroundColor: "#ffffff",
        borderRadius: 8,
        height: 36,
        width: 36,
        resizeMode: 'contain',
        marginRight: 20,
    },
    containerBotao2: {
        flexDirection: 'row',
        alignItem: 'center',
        justifyContent: 'center',
    },
});