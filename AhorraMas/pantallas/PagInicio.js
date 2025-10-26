import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default function PagInicio(){
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>AHORRO+</Text>

        <TouchableOpacity 
        style={styles.boton}>
          <text style={styles.textoBoton}>Registrame ahora</text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.boton}>
          <text style={styles.textoBoton}>Iniciar sesión</text>
        </TouchableOpacity>

      </View>
      
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#007A83',
  },
  boton:{
    marginTop:40,
    flexDirection:'column',
    gap:40,
    backgroundColor: '#ffffff'
  },
  textoBoton: {
    color: '#007A83',
    fontSize: 30,
    fontWeight: '900',
  },
  titulo: {
    color: '#ffffff',
    justifyContent: 'start',
    alignItems: 'start',
  }
})