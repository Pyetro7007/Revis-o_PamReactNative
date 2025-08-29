import { TouchableOpacity, StyleSheet } from "react-native";

export default function BotaoAcessar({children, aoPressionar}){
    return(
        <TouchableOpacity style={styles.botaoAcessar}onPress={aoPressionar}>
            {children}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botaoAcessar: {
        alignItems: 'center',
        marginTop: 25,
        backgroundColor: "#14c871",
        borderRadius: 8,
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 50,
    }
});