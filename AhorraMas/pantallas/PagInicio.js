import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default function PagInicio({navigation}){
    return (
      <View style={styles.container}>
        <View style={styles.pp}>
        <Text style={styles.titulo}>AHORRO+</Text>
        <Text style={styles.subtitulo}>Gestiona tu dinero de forma simple e inteligente.</Text>
        </View>

        <View style={styles.sp}>
        <TouchableOpacity 
        style={styles.boton}>
          <text style={styles.textoBoton}>Registrarme ahora</text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.boton}>
          <text style={styles.textoBoton}>Iniciar sesión</text>
        </TouchableOpacity>
        </View>

        <View style={styles.tp}>
        <text style={styles.subtitulo}>Tu presupuesto, bajo control.</text>
        </View>

      </View>
      
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#007A83',
  },
  pp: {
    flex: 1,
    padding: 20,
    backgroundColor: '#007A83',
  },
  sp: {
    flex: 6,
    padding: 20,
    backgroundColor: '#007A83',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tp: {
    padding: 20,
    backgroundColor: '#007A83',
  },
  boton:{
    marginTop: 30,
    flexDirection:'column',
    gap: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 30,
  },
  textoBoton: {
    color: '#007A83',
    fontSize: 30,
    fontWeight: '900',
  },
  titulo: {
    flex: 1,
    color: '#ffffff',
    justifyContent: 'start',
    alignItems: 'start',
    fontWeight: 'bold',
    fontSize: 40,
  },
  subtitulo: {
    color: '#ffffff',
    justifyContent: 'start',
    alignItems: 'start',
    fontSize: 20,
  },
})