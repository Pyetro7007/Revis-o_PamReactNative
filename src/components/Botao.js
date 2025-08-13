import { TouchableOpacity, StyleSheet } from "react-native";

export default function Botao({children, aoPressionar}){
    return(
        <TouchableOpacity style={StyleSheet.botao}onPress={aoPressionar}>
            {children}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    
})