import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import EstablecerPresupuesto from './EstablecerPresupuesto';
import ControlPresupuesto from './ControlPresupuesto';
import ResumenMensual from './ResumenMensual';
import VerGraficos from './VerGraficos';

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
    case 'menu':
        default:
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Text style={styles.logotexto}>AHORRO+</Text>
                </View>
                <View style={styles.pp}>
                    <Text style={styles.texto}>Planifica tu presupuesto y controla tus finanzas sin complicaciones.</Text>
                </View>
                <View style={styles.sp}>
                    <TouchableOpacity 
                        style={styles.boton}
                        onPress={()=>setScreen('Establecer')}>
                        <text>Establecer Presupuesto</text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.boton}
                        onPress={()=>setScreen('Control')}>
                        <text>Control de Presupuesto</text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.boton}
                        onPress={()=>setScreen('Resumen')}>
                        <text>Resumen Mensual</text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.boton}
                        onPress={()=>setScreen('Graficos')}>
                        <text>Ver Gráficos</text>
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