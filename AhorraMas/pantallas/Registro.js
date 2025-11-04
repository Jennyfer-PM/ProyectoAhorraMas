import { Text, StyleSheet, View, TextInput, Alert, Platform, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MenuApp from './MenuApp'

const validar = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)

export default function Registro() {
  const [correo, setCorreo] = useState('')
  const [clave, setClave] = useState('')
  const [screen, setScreen] = useState('registro')

  const mostrarAlerta = () => {
    if (correo.trim() === '' && clave.trim() === '') {
      Alert.alert('Error', 'Por favor, ingresa los campos correspondientes')
    } else if (correo.trim() === '') {
      Alert.alert('Error', 'Por favor, ingresa tu correo electrónico')
    } else if (clave.trim() === '') {
      Alert.alert('Error', 'Por favor, ingresa tu contraseña')
    } else if (!validar.test(correo.trim())) {
      Alert.alert('Error', 'Tu correo debe contener un @ y un dominio')
    } else {
      Alert.alert('Registro completado', `Bienvenid@ con correo ${correo}`)
      setScreen('menu') // cambia de pantalla al MenuApp
    }
  }

  switch (screen) {
    case 'menu':
      return <MenuApp />
    default:
      return (
        <View style={styles.container}>
          <View style={styles.logo}>
            <Text style={styles.logotexto}>AHORRO+</Text>
          </View>

          <View style={styles.pp}>
            <Text style={styles.titulo}>Comenzar</Text>
            <Text style={styles.subtitulo}>
              Ingresa tu dirección de correo electrónico para comenzar.
            </Text>
          </View>

          <View style={styles.sp}>
            <TextInput
              style={styles.recuadro}
              placeholder="Correo Electrónico:"
              value={correo}
              onChangeText={setCorreo}
              maxLength={100}
            />
            <TextInput
              style={styles.recuadro}
              placeholder="Contraseña:"
              value={clave}
              onChangeText={setClave}
              maxLength={50}
              secureTextEntry={true}
            />
          </View>

          <View style={styles.tp}>
            <TouchableOpacity style={styles.boton} onPress={mostrarAlerta}>
              <Text style={styles.textoBoton}>Comenzar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: '#007A83',
    },
    pp: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sp: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tp: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center',
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
    titulo: {
        fontSize: 55,
        fontWeight: '300',
        marginBottom: 25,
        color: '#ffffff',
    },
    subtitulo: {
        fontSize: 20,
        marginBottom: 15,
        color: '#ffffff',
    },
    recuadro: {
        borderWidth: 1,
        borderColor: 'white',
        width: 230,
        height: 45,
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 18,
        fontSize: 20,
        color: 'grey',
    },
    boton:{
        marginTop:20,
        gap:20,
        backgroundColor: '#ffffff',
        borderRadius: 18,
        width: 230,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBoton: {
        color: '#007A83',
        fontSize: 23,
        fontWeight: '400',
  },
})