import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity } from 'react-native';
import BotaoAcessar from '../components/BotaoAcessar';
import BotaoCadastrar from '../components/BotaoCadastrar';
import BotaoVoltar from '../components/BotaoVoltar';
import iconeGoogle from '../../assets/Google.png';
import iconeFacebook from '../../assets/Facebook.png';
import CheckBox from 'expo-checkbox';

const windowWidth = Dimensions.get('window').width;

export default function Tela1({ navigation }) {
    const [checked, setChecked] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.header}/>
            <View style={styles.containerBotaoVoltar}>
                <BotaoVoltar
                    aoPressionar={() => navigation.navigate('Tela1')}>
                    <Text style={{ color: '#14c871', fontSize: 48 }}>{"<"}</Text>
                </BotaoVoltar>
            </View>
            <Text style={styles.acesse}>Acesse</Text>
            <Text style={styles.subtitulo}>com E-mail e senha</Text>
            <View style={styles.containerTextInputEmail}>
                <Text style={styles.tituloTextInput}>E-mail</Text>
                <TextInput style={styles.textInput}
                    placeholder='Digite seu E-mail'>
                </TextInput>
            </View>
            <View style={styles.containerTextInputSenha}>
                <Text style={styles.tituloTextInput}>Senha</Text>
                <TextInput style={styles.textInput}
                    placeholder='Digite sua senha'>
                </TextInput>
            </View>
            <View style={styles.checkBox}>
                <CheckBox
                    value={checked}
                    onValueChange={setChecked}
                    color={"#14c871"}
                />
                <Text style={{ color: '#000000', fontsize: 16 }}> Lembrar Senha</Text>
            </View>
            <TouchableOpacity style={styles.esqueciSenha}>
                <Text>Esqueci minha senha</Text>
            </TouchableOpacity>
            <View style={styles.containerBotaoAcessar}>
                <BotaoAcessar
                    aoPressionar={() => navigation.navigate('Tela2')}>
                    <Text style={{ color: '#FFFFFF' }}> Acessar </Text>
                </BotaoAcessar>
            </View>
            <View style={styles.containerBotaoCadastrar}>
                <BotaoCadastrar
                    aoPressionar={() => navigation.navigate('Tela2')}>
                    <Text style={{ color: '#000000' }}> Cadastrar </Text>
                </BotaoCadastrar>
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
    containerBotaoVoltar: {
        fontSize: 30,
        color: "#2e3e4b",
        textAlign: 'center',
        marginTop: 40,
        marginLeft: 30,
        position: 'absolute',
        left: 0,
        top: 0,
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
    containerTextInputEmail: {
        paddingVertical: 15,
        justifyContent: 'center',
        width: windowWidth * 0.9,
        marginTop: 20,
    },
    containerTextInputSenha: {
        paddingVertical: 15,
        justifyContent: 'center',
        width: windowWidth * 0.9,
        marginBottom: 370,
    },
    tituloTextInput: {
        fontSize: 11,
        color: "#2e3e4b",
        textAlign: 'center',
        position: 'absolute',
        display: 'flex',
        top: 0,
        left: 0,
    },
    textInput: {
        backgroundColor: '#E3E7F3',
        width: windowWidth * 0.9,
        height: windowWidth * 0.15,
        borderRadius: 5,
    },
    checkBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        position: 'absolute',
        left: 0,
        bottom: 0,
        marginBottom: 470,
        marginLeft: 25,
    },
    esqueciSenha: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        marginBottom: 470,
        marginRight: 25,
    },
    containerBotaoAcessar: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        marginBottom: 370,
        marginLeft: 25,
    },
    containerBotaoCadastrar: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        marginBottom: 370,
        marginRight: 25,
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
        height: windowWidth * 0.19,
        width: windowWidth * 0.19,
        resizeMode: 'contain',
        position: 'absolute',
        right: 25,
        marginTop: 50,
    },
    icone2: {
        backgroundColor: "#f3f3f3",
        borderRadius: 8,
        height: windowWidth * 0.19,
        width: windowWidth * 0.19,
        resizeMode: 'contain',
        position: 'absolute',
        left: 25,
        marginTop: 50,
    },
});