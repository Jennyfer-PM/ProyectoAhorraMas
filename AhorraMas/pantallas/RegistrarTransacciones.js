import { Text, StyleSheet, View, TextInput, Alert, Platform, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function RegistrarTransacciones(){
  const [monto, setMonto] = useState(0);
  const [motivo, setMotivo] = useState('');
  const [fecha, setFecha] = useState('');
  const [destino, setDestino] = useState('');

  const mostrarAlerta = () => {
    if ((monto===0) && (motivo==='') && (fecha==='') && (destino==='')) {
      if(Platform.OS === 'web') {
        window.alert ('Error, debes llenar los campos correspondientes');
      } else {
        Alert.alert ('Error, debes llenar los campos correspondientes');
       }
      } else if(monto===0){
        if(Platform.OS === 'web') {
          window.alert ('Error, no has capturado el valor de la transacción');
        } else {
          Alert.alert ('Error, no has capturado el valor de la transacción');
        }  
      } else if(motivo===''){
        if(Platform.OS === 'web') {
          window.alert ('Error, no has capturado el motivo de la transacción');
        } else {
          Alert.alert ('Error, no has capturado el motivo de la transacción');
        }  
      } else if(fecha===''){
        if(Platform.OS === 'web') {
          window.alert ('Error, no has capturado la fecha de la transacción');
        } else {
          Alert.alert ('Error, no has capturado la fecha de la transacción');
        }  
      } else if(destino===''){
        if(Platform.OS === 'web') {
          window.alert ('Error, no has capturado el destino de la transacción');
        } else {
          Alert.alert ('Error, no has capturado el destino de la transacción');
        }  
      } else {
        if(Platform.OS === 'web') {
          window.alert ('Tu transacción se ha completado exitosamente');
        } else {
          Alert.alert ('Tu transacción se ha completado exitosamente');
        }
      }
    }

    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Text style={styles.logotexto}>AHORRO+</Text>
        </View>
                
        <View style={styles.pp}>
          <Text style={styles.titulo}>Registrar Transacciones</Text>
        </View>

        <View style={styles.sp}>
          <TextInput
          style={styles.recuadro}
          placeholder='Monto:'
          value = {monto}
          onChangeText={setMonto}
          maxLength={100}
          />
          <TextInput
          style={styles.recuadro}
          placeholder='Motivo:'
          value = {motivo}
          onChangeText={setMotivo}
          maxLength={100}
          />
          <TextInput
          style={styles.recuadro}
          placeholder='Fecha:'
          value = {fecha}
          onChangeText={setFecha}
          maxLength={100}
          />
          <TextInput
          style={styles.recuadro}
          placeholder='Destino:'
          value = {destino}
          onChangeText={setDestino}
          maxLength={100}
          />
        </View>

        <View style={styles.tp}>
          <TouchableOpacity 
            style={styles.boton}
            onPress={mostrarAlerta}>
              <Text style={styles.textoBoton}>Registrar</Text>
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
    flex: 2,
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 55,
    fontWeight: '300',
    marginBottom: 25,
    color: '#ffffff',
  },
  sp: {
    flex: 15,
    justifyContent: 'center',
    alignItems: 'start',
  },
  subtitulo: {
    fontSize: 15,
    marginBottom: 1,
    color: '#ffffff',
    width: 340,
    height: 30,
    fontWeight: '500',
  },
  tp: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boton:{
    marginTop:20,
    gap:20,
    backgroundColor: '#ffffff',
    borderRadius: 18,
    width: 160,
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