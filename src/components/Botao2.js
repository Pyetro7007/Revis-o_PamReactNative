import { TouchableOpacity, StyleSheet } from "react-native";

export default function Botao2({children, aoPressionar}){
    return(
        <TouchableOpacity style={StyleSheet.botao2}onPress={aoPressionar}>
            {children}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botao2: {
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 45,
    }
});