import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Image } from 'react-native';
import Botao1 from '../components/Botao1';
import Botao2 from '../components/Botao2';
import casual_dog from '../../assets/casual_dog.png';

const windowWidth = Dimensions.get('window').width;

export default function Tela1({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/casual_dog.png")} style={styles.imagem} />
            <Text style={styles.titulo}>Ótimo dia!</Text>
            <Text style={styles.subtitulo}>Como deseja acessar?</Text>
            <View style={styles.containerBotao1}>
                <Botao1
                    aoPressionar={() => navigation.navigate()}>
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
    conatiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fefefe',
    },
    imagem: {
        alignItems: 'center',
        height: 310,
        width: 380,
        marginTop: 100,
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
        height: 50,
        alignItems: 'center',
        marginTop: 25,
        backgroundColor: "#14c871",
    },
    containerBotao2: {
        height: 50,
        alignItems: 'center',
    },
});