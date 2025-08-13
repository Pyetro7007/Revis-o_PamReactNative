import React from 'react';
import casual_dog from '../assets/casual_dog.png';

const windowWidth = Dimensions.get('window').width;

export default function Tela1({ navigation }) {
    <View style={styles.container}>
        <Text style={styles.titulo}>Ótimo dia!</Text>
            <Text style={styles.subtitulo}>Como deseja acessar?</Text>
        <View style={styles.containerBotao1}>
            <Botao
            aoPressionar={() => navigation.navigate()}>
                <Text style={{color:'#FFFFFF'}}>Como deseja acessar?</Text>
            </Botao>
        </View>
        <View style={styles.containerBotao2}>
            <Botao
            aoPressionar={() => navigation.navigate('Tela2')}>
                <Text style={{color:'#000000'}}>Outras opções</Text>
            </Botao>
        </View>
    </View>
}

<Image 
    source={casual_dog}
/>