import { Text, StyleSheet, View, TextInput, Button, Alert, Platform, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'

const validar = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

export default function Registro({navigation}){

    const [correo, setCorreo] = useState('');
    const [clave, setClave] = useState('');

    const mostrarAlerta = () => {
            if ((correo.trim()==='') && (clave.trim)) {
                if(Platform.OS === 'web') {
                    window.alert ('Error, porfavor ingresa los campos correspondientes');
                } else {
                    Alert.alert ('Error, porfavor ingresa los campos correspondientes')
                }
            }
            else if (clave.trim()==='') {
                if(Platform.OS === 'web') {
                    window.alert ('Error, porfavor ingresa tu contraseña');
                } else {
                    Alert.alert ('Error, porfavor ingresa tu contraseña')
                }
            }
            else if(correo.trim()===''){
                if(Platform.OS === 'web') {
                    window.alert ('Error, porfavor ingresa tu correo electronico');
                } else {
                    Alert.alert ('Error, porfavor ingresa tu correo electronico')
                }
            }
            else if(!validar.test(correo.trim())){
                if(Platform.OS === 'web') {
                    window.alert ('Error, tu correo debe contener un @ y un dominio');
                } else {
                    Alert.alert ('Error, tu correo debe contener un @ y un dominio')
                }
            } else {
                if (Platform.OS === 'web') {
                    window.alert(`Registro completado, Bienvenid@ ${nombre} con correo ${correo}`);
                } else {
                    Alert.alert(`Registro completado, Bienvenid@ ${nombre} con correo ${correo}`);
                }
            }
        }

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Text style={styles.logotexto}>AHORRO+</Text>
            </View>

            <View style={styles.pp}>
                <Text style={styles.titulo}>Comenzar</Text>
                <Text style={styles.subtitulo}>Ingresa tu dirección de correo electrónico para comenzar</Text>
            </View>
        
            <View style={styles.sp}>
                <TextInput
                    style={styles.recuadro}
                    placeholder='Correo Electrónico:'
                    value = {correo}
                    onChangeText={setCorreo}
                    maxLength={100}
                />
                <TextInput
                    style={styles.recuadro}
                    placeholder='Contraseña:'
                    value = {clave}
                    onChangeText={setClave}
                    maxLength={50}
                    secureTextEntry={true}
                />
            </View>

            <View style={styles.tp}>
                <TouchableOpacity 
                style={styles.boton}
                onPress={mostrarAlerta}>
                    <text>Registrarme ahora</text>
                </TouchableOpacity>
            </View>
        </View>     
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#007A83',
    },
    pp: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sp: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tp: {
        flex: 5,
        justifyContent: 'end',
        alignItems: 'center',
    },
    logo: {
        flex: 1,
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#ffffff',
        justifyContent: 'start',
        alignItems: 'start',
    },
    logotexto: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#ffffff',
    },
    titulo: {
        fontSize: 50,
        marginBottom: 15,
        color: '#ffffff',
        justifyContent: 'center',
    },
    subtitulo: {
        fontSize: 22,
        marginBottom: 15,
        color: '#ffffff',
    },
    titulo1: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#ffffff',
    },
    recuadro: {
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 15,
        color: '#007A83',
        fontSize: 20,
    },
    boton:{
        marginTop:20,
        flexDirection:'row',
        gap:20,
        color: '#007A83',
        backgroundColor: '#ffffff',
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 30,
    },
})