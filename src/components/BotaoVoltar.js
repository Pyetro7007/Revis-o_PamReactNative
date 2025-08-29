import { TouchableOpacity, StyleSheet } from "react-native";

export default function BotaoVoltar({children, aoPressionar}){
    return(
        <TouchableOpacity style={styles.botaoVoltar}onPress={aoPressionar}>
            {children}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botaoVoltar: {
        alignItems: 'center',
    }
});