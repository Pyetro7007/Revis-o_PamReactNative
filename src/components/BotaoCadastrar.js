import { TouchableOpacity, StyleSheet } from "react-native";

export default function BotaoCadastrar({children, aoPressionar}){
    return(
        <TouchableOpacity style={styles.botaoCadastrar}onPress={aoPressionar}>
            {children}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botaoCadastrar: {
        alignItems: 'center',
        marginTop: 15,
        backgroundColor: "#ffffff",
        paddingVertical: 20,
        paddingHorizontal: 50,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#12b667",
    }
});