import { TouchableOpacity, StyleSheet } from "react-native";

export default function Botao1({children, aoPressionar}){
    return(
        <TouchableOpacity style={StyleSheet.botao1}onPress={aoPressionar}>
            {children}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botao1: {
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 45,
        backgroundColor: "#14c871",
    }
});