import { TouchableOpacity, StyleSheet } from "react-native";

export default function Botao2({children, aoPressionar}){
    return(
        <TouchableOpacity style={styles.botao2}onPress={aoPressionar}>
            {children}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botao2: {
        alignItems: 'center',
        marginTop: 15,
        backgroundColor: "#ffffff",
        paddingVertical: 20,
        paddingHorizontal: 125,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#12b667",
    }
});