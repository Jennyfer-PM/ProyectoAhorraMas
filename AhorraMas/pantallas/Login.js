import { Text, StyleSheet, View, TextInput, Alert, Platform, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MenuApp from './MenuApp'

const validar = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)

export default function Login(){
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

    switch(screen){
        case 'menu':
              return <MenuApp />
        default:
            return(
                <View style={styles.container}>
                    <View style={styles.logo}>
                        <Text style={styles.textoLogo}>Ahorra+ </Text>
                    </View>

                    <View style={styles.containerTitulo}>
                        <Text style={styles.titulo}>Ingresar</Text>
                        <Text style={styles.subtitulo}>
                            Ingresa tu dirección de correo electrónico y tu contraseña para ingresar.
                        </Text>
                    </View>

                    <View style={styles.containerInput}>
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

                    <View style={styles.containerButton}>
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007A83',
    },
    logo: {
        flex: .1,
        justifyContent:'center',
        alignContent: 'center',
    },
    textoLogo: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white'
    },
    containerTitulo: {
        flex: .1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 25,
        color: 'white'
    },
    subtitulo: {
        fontSize: 15,
        color: 'white'
    },
    containerInput: {
        flex: .1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    recuadro: {
        backgroundColor: 'white',
        borderColor: 'white',
        marginBottom: 10,
        borderRadius: 18,
        width: 230,
        height: 45,
        fontSize: 20,
        color: 'grey',
    },
    containerButton:{
        flex: .1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boton: {
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