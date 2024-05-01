import { StatusBar } from 'expo-status-bar';
import { Text, View,TextInput, StyleSheet} from 'react-native';

export default function Input({
textPlaceHolder, 
valorNumero, 
valorSetNumero
}){

    return(
        <TextInput
        style={styles.input}
        placeholder={textPlaceHolder}
        keyboardType='number-pad' 
        value={valorNumero}
        onChangeText={valorSetNumero}/>
    )

}

const styles = StyleSheet.create({

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
  });