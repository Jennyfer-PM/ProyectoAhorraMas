import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import EstablecerPresupuesto from './EstablecerPresupuesto';
import ControlPresupuesto from './ControlPresupuesto';
import ResumenMensual from './ResumenMensual';
import VerGraficos from './VerGraficos';
import Perfil from './Perfil';

export default function MenuApp() {
  const [screen, setScreen] = useState('menu');

  switch(screen){
    case 'Establecer':
        return <EstablecerPresupuesto/>;
    case 'Control':
        return <ControlPresupuesto/>;
    case 'Resumen':
        return <ResumenMensual/>;
    case 'Graficos':
        return <VerGraficos/>;
    case 'Perfil':
        return <Perfil/>;
    default:
        return (
            <View style={styles.container}>
                <View style={styles.pp}>
                                        <View style={styles.logo}>
                        <Text style={styles.logotexto}>AHORRO+</Text>
                        <Text style={styles.subtitulo}>Controla tus finanzas</Text>
                    </View>
                    
                    <View style={styles.sp}>
                        <TouchableOpacity 
                            style={styles.boton}
                            onPress={()=>setScreen('Establecer')}>
                            <Text style={styles.textoBoton}>Establecer Presupuesto</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.boton}
                            onPress={()=>setScreen('Control')}>
                            <Text style={styles.textoBoton}>Control de Presupuesto</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.boton}
                            onPress={()=>setScreen('Resumen')}>
                            <Text style={styles.textoBoton}>Resumen Mensual</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.boton}
                            onPress={()=>setScreen('Graficos')}>
                            <Text style={styles.textoBoton}>Ver Gráficos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={styles.boton}
                        onPress={()=>setScreen('Perfil')}>
                        <Text style={styles.textoBoton}>Perfil</Text>
                    </TouchableOpacity>
                    </View>
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
        marginTop:25,
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