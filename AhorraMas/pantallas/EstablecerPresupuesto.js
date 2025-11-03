import { Text, StyleSheet, View, TextInput, Alert, Platform, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function EstablecerPresupuesto(){
  const [total, setTotal] = useState(0);
  const [gastos, setGastos] = useState(0);
  const [valido, setValido] = useState(false);


  const mostrarAlerta = () => {
    if ((total==0) && (gastos==0)) {
      if(Platform.OS === 'web') {
        window.alert ('Error, porfavor ingresa los campos correspondientes');
      } else {
        Alert.alert ('Error, porfavor ingresa los campos correspondientes')
      } 
    } else if (total==0) {
      if(Platform.OS === 'web') {
        window.alert ('Error, porfavor ingresa tu presupuesto total');
      } else {
        Alert.alert ('Error, porfavor ingresa tu presupuesto total')
      }
    } else if(gastos==0){
      if(Platform.OS === 'web') {
        window.alert ('Error, porfavor ingresa el monto de tus gastos');
      } else {
        Alert.alert ('Error, porfavor ingresa el monto de tus gastos')
      }
    } else {
      setValido(true);
    }
  }

  if(valido) {
    return (
      <View style={styles.container}>

        <View style={styles.logo}>
          <Text style={styles.logotexto}>AHORRO+</Text>
        </View>

        <View style={styles.pp}>
            <Text style={styles.titulo}>Establece tu Presupuesto</Text>
            <TextInput
            style={styles.recuadro}
            placeholder='Monto total de presupuesto:'
            value = {total}
            onChangeText={setTotal}
            maxLength={100}
            />

            <TextInput
            style={styles.recuadro}
            placeholder='Gastos fijos:'
            value = {gastos}
            onChangeText={setGastos}
            maxLength={50}
            />
        </View>

        <View style={styles.sp}>
          <Text style={styles.subtitulo1}>Distribución del presupuesto </Text>
          <Text style={styles.subtitulo}>Presupuesto total: {total}</Text>
          <Text style={styles.subtitulo}>Gastos: {gastos}</Text>
          <Text style={styles.subtitulo}>Calculo de ahorro recomendado: {total - gastos}</Text>
        </View>

        <View style={styles.tp}>
          <TouchableOpacity 
          style={styles.boton}
          onPress={mostrarAlerta}>
            <Text style={styles.textoBoton}>Guardar</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }

    return (
      <View style={styles.container}>

        <View style={styles.logo}>
          <Text style={styles.logotexto}>AHORRO+</Text>
        </View>

        <View style={styles.pp}>
            <Text style={styles.titulo}>Establece tu Presupuesto</Text>
            <TextInput
            style={styles.recuadro}
            placeholder='Monto total de presupuesto:'
            value = {total}
            onChangeText={setTotal}
            maxLength={100}
            />

            <TextInput
            style={styles.recuadro}
            placeholder='Gastos fijos:'
            value = {gastos}
            onChangeText={setGastos}
            maxLength={50}
            />
        </View>

        <View style={styles.sp}>
          <Text style={styles.subtitulo1}>Distribución del presupuesto </Text>
          <Text style={styles.subtitulo}>Presupuesto total: </Text>
          <Text style={styles.subtitulo}>Gastos: </Text>
          <Text style={styles.subtitulo}>Calculo de ahorro recomendado: </Text>
        </View>

        <View style={styles.tp}>
          <TouchableOpacity 
          style={styles.boton}
          onPress={mostrarAlerta}>
            <Text style={styles.textoBoton}>Guardar</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#007A83',
  },
  logo: {
    flex: 3,
    justifyContent: 'start',
    alignItems: 'start',
    marginBottom: 15,
  },
  logotexto: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  pp: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sp: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tp: {
      flex: 3,
      justifyContent: 'end',
      alignItems: 'center',
  },
  titulo: {
    fontSize: 55,
    fontWeight: '300',
    marginBottom: 25,
    color: '#ffffff',
  },
  subtitulo: {
    fontSize: 20,
    marginBottom: 1,
    color: '#ffffff',
    width: 340,
    height: 45,
    fontWeight: '500',
  },
  subtitulo1: {
    fontSize: 26,
    marginBottom: 1,
    color: '#ffffff',
    width: 340,
    height: 45,
    fontWeight: '500',
  },
  boton:{
    marginTop:20,
    gap:20,
    backgroundColor: '#ffffff',
    borderRadius: 18,
    width: 200,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBoton: {
    color: '#007A83',
    fontSize: 23,
    fontWeight: '400',
  },
  recuadro: {
    borderWidth: 1,
    borderColor: 'white',
    width: 320,
    height: 45,
    marginBottom: 15,
    backgroundColor: 'white',
    borderRadius: 18,
    fontSize: 20,
    color: 'black',
  },
})