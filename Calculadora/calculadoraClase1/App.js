import { StatusBar, Alert, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Input from './src/components/input';

export default function App() {
  const [numero1, setNumero1] = useState('0');
  const [numero2, setNumero2] = useState('0');
  const [resultado, setResultado] = useState(0);

  const sumar = () => {
    let suma = parseFloat(numero1) + parseFloat(numero2);
    setResultado(suma);
    showAlert('Suma', suma);
  }

  const Restar = () => {
    let resta = parseFloat(numero1) - parseFloat(numero2);
    setResultado(resta);
    showAlert('Resta', resta);
  }

  const Dividir = () => {
    let division = parseFloat(numero1) / parseFloat(numero2);
    setResultado(division);
    showAlert('División', division);
  }

  const Multiplicar = () => {
    let multiplicacion = parseFloat(numero1) * parseFloat(numero2);
    setResultado(multiplicacion);
    showAlert('Multiplicación', multiplicacion);
  }

  const clean = () => {
    setNumero1('0');
    setNumero2('0');
    setResultado(0);
  }

  const showAlert = (operacion, resultado) => {
    
    Alert.alert(
      'Resultado',
      `El resultado de la ${operacion} es ${resultado}`,
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
        
      ],
      { cancelable: false }
    );
  }

  return (
    <View style={styles.container}>
      <Text>Operaciones matemáticas</Text>
      <Text>Numero 1: </Text>
      <Input
      textPlaceHolder={'Numero 1'}
      valorNumero={numero1}
      valorSetNumero={setNumero1}
      />
      <Text>Numero 2: </Text>
      <Input
      textPlaceHolder={'Numero 2'}
      valorNumero={numero2}
      valorSetNumero={setNumero2}
      />
      
      

      <TouchableOpacity
        style={styles.buttons}
        onPress={sumar}>
        <Text style={{ color: '#FFF' }}
        >Sumar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttons}
        onPress={Restar}>
        <Text style={{ color: '#FFF' }}>Restar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttons}
        onPress={Dividir}>
        <Text style={{ color: '#FFF' }}>Dividir</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttons}
        onPress={Multiplicar}>
        <Text style={{ color: '#FFF' }}>Multiplicar</Text>
      </TouchableOpacity>

      
      <TouchableOpacity
        style={styles.buttonClear}
        onPress={clean}>
        <Text style={{ color: '#FFF' }}>Limpiar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttons: {
    marginTop: 2,
    backgroundColor: 'blue',
    padding: 15
  },
  buttonClear: {
    marginTop: 10,
    backgroundColor: 'red',
    padding: 15
  }
});