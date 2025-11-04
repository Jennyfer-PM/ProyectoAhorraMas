import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function MenuApp() {
  const navigation = useNavigation();

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
            onPress={() => navigation.navigate('EstablecerPresupuesto')}>
            <Text style={styles.textoBoton}>Establecer Presupuesto</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.boton}
            onPress={() => navigation.navigate('ControlPresupuesto')}>
            <Text style={styles.textoBoton}>Control de Presupuesto</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.boton}
            onPress={() => navigation.navigate('ResumenMensual')}>
            <Text style={styles.textoBoton}>Resumen Mensual</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.boton}
            onPress={() => navigation.navigate('VerGraficos')}>
            <Text style={styles.textoBoton}>Ver Gráficos</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.boton}
            onPress={() => navigation.navigate('Perfil')}>
            <Text style={styles.textoBoton}>Perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
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
    logo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
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
        justifyContent: 'center',
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