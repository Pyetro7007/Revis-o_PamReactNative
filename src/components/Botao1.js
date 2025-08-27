import { TouchableOpacity, StyleSheet } from "react-native";

export default function Botao1({children, aoPressionar}){
    return(
        <TouchableOpacity style={styles.botao1}onPress={aoPressionar}>
            {children}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botao1: {
        alignItems: 'center',
        marginTop: 25,
        backgroundColor: "#14c871",
        paddingVertical: 20,
        paddingHorizontal: 100,
        borderRadius: 8,
    }
});