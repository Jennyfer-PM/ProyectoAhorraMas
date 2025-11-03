import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import RegistrarTransacciones from './RegistrarTransacciones';
import GestionarTransacciones from './GestionarTransacciones';
import FiltrarTransacciones from './FiltrarTransacciones';
import EditarPerfil from './EditarPerfil';

export default function Perfil() {
  const [screen, setScreen] = useState('menu');

  switch(screen){
    case 'Registrar':
        return <RegistrarTransacciones/>;
    case 'Gestionar':
        return <GestionarTransacciones/>;
    case 'Filtrar':
        return <FiltrarTransacciones/>;
    case 'Editar':
        return <EditarPerfil/>;
    case 'menu':
        default:
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Text style={styles.logotexto}>AHORRO+</Text>
                </View>
                <View style={styles.pp}>
                    <Text style={styles.subtitulo}>Mantén tu perfil actualizado y gestiona tu actividad en un solo lugar.</Text>
                </View>
                <View style={styles.sp}>
                    <TouchableOpacity 
                        style={styles.boton}
                        onPress={()=>setScreen('Registrar')}>
                        <Text style={styles.textoBoton}>Registrar Transacciones</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.boton}
                        onPress={()=>setScreen('Gestionar')}>
                        <Text style={styles.textoBoton}>Gestionar Transacciones</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.boton}
                        onPress={()=>setScreen('Filtrar')}>
                        <Text style={styles.textoBoton}>Filtrar Transacciones</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.boton}
                        onPress={()=>setScreen('Editar')}>
                        <Text style={styles.textoBoton}>Editar Perfil</Text>
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
        justifyContent: 'start',
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
    subtitulo: {
        fontSize: 25,
        marginBottom: 15,
        color: '#ffffff',
    },
    sp: {
        flex: 10,
        justifyContent: 'start',
        alignItems: 'center',
    },
    boton:{
        marginTop:40,
        gap:20,
        backgroundColor: '#ffffff',
        borderRadius: 18,
        width: 320,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBoton: {
        color: '#007A83',
        fontSize: 23,
        fontWeight: '400',
  },
})