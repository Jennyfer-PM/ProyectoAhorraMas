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
                    <Text style={styles.texto}>Mantén tu perfil actualizado y gestiona tu actividad en un solo lugar.</Text>
                </View>
                <View style={styles.sp}>
                    <TouchableOpacity 
                        style={styles.boton}
                        onPress={()=>setScreen('Registrar')}>
                        <text>Registrar Transacciones</text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.boton}
                        onPress={()=>setScreen('Gestionar')}>
                        <text>Gestionar Transacciones</text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.boton}
                        onPress={()=>setScreen('Filtrar')}>
                        <text>Filtrar Transacciones</text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.boton}
                        onPress={()=>setScreen('Editar')}>
                        <text>Editar Perfil</text>
                    </TouchableOpacity>
                </View>
            </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#007A83',
    },
    pp: {
        flex: 3,
        justifyContent: 'start',
        alignItems: 'center',
    },
    logo: {
        flex: 2,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'start',
    },
    logotexto: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#ffffff',
    },
    texto: {
        fontSize: 35,
        marginBottom: 15,
        color: '#ffffff',
    },
    sp: {
        flex: 9,
        justifyContent: 'start',
        alignItems: 'center',
    },
    boton:{
        marginTop:35,
        gap:40,
        flexDirection:'column',
        color: '#007A83',
        backgroundColor: '#ffffff',
        borderRadius: 20,
        height: 40,
        width: 460,
        fontSize: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
})