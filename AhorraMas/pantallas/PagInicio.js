import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Registro from './Registro'
import MenuApp from './MenuApp'

export default function PagInicio() {
  const [screen, setScreen] = useState('inicio')

  switch (screen) {
    case 'registro':
      return <Registro />
    case 'menu':
      return <MenuApp />
    default:
      return (
        <View style={styles.container}>
          <View style={styles.pp}>
            <Text style={styles.titulo}>AHORRO+</Text>
            <Text style={styles.subtitulo}>
              Gestiona tu dinero de forma simple e inteligente.
            </Text>
          </View>

          <View style={styles.sp}>
            <TouchableOpacity
              style={styles.boton}
              onPress={() => setScreen('registro')}
            >
              <Text style={styles.textoBoton}>Registrarse ahora</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.boton}
              onPress={() => setScreen('menu')}
            >
              <Text style={styles.textoBoton}>Iniciar sesión</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tp}>
            <Text style={styles.subtitulo}>Tu presupuesto, bajo control.</Text>
          </View>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#007A83',
  },
  pp: {
    flex: 2,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#007A83',
  },
  sp: {
    flex: 7,
    padding: 20,
    backgroundColor: '#007A83',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tp: {
    flex: 1,
    padding: 20,
    backgroundColor: '#007A83',
    justifyContent: 'center',
    alignItems: 'end',
  },
  boton:{
    marginTop: 30,
    flexDirection:'column',
    gap: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    width: 250,
    height: 50,
  },
  textoBoton: {
    color: '#007A83',
    fontSize: 23,
    fontWeight: '300',
  },
  titulo: {
    flex: 1,
    color: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 40,
  },
  subtitulo: {
    color: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
  },
})