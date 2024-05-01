import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function Button({texto, funcion}){

    return(
        <TouchableOpacity
        style={styles.btn}
        onPress={funcion}>
            <Text style={styles.text}>{texto}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn:{
      backgroundColor:'blue',
      padding:15,
      width:150, marginBottom:5
    }, 
    text:{
      textAlign:'center', 
      fontWeight:'900',
      color:"white"
    }
  });