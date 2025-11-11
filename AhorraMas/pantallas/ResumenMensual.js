import { Text, StyleSheet, View, TextInput, Alert, Platform, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function ResumenMensual(){
  const [valido, setValido] = useState(false);
  const [presupuesto, setPresupuesto] = useState(5000);
  const [ahorros, setAhorros] = useState(1300);
  const [renta, setRenta] = useState(1500);
  const [comida, setComida] = useState(800);
  const [transporte, setTransporte] = useState(500);
  const [servicios, setServicios] = useState(400);
  const [entretenimiento, setEntretenimiento] = useState(300);
  const [otros, setOtros] = useState(200);
  const [gastos, setGastos] = useState(3700);

  const mostrarAlerta = () => {
    if ((parseFloat(ahorros) + parseFloat(renta) + parseFloat(comida) + parseFloat(transporte)
          + parseFloat(servicios) + parseFloat(entretenimiento) + parseFloat(otros)) > parseFloat(presupuesto)) {
      if(Platform.OS === 'web') {
        window.alert ('Error, los valores ingresados superan el monto del presupuesto');
      } else {
        Alert.alert ('Error, los valores ingresados superan el monto del presupuesto');
       }
      } else if((parseFloat(ahorros) + parseFloat(renta) + parseFloat(comida) + parseFloat(transporte)
          + parseFloat(servicios) + parseFloat(entretenimiento) + parseFloat(otros)) < parseFloat(presupuesto)){
        if(Platform.OS === 'web') {
          window.alert ('Error, los valores ingresados son menores al monto del presupuesto');
        } else {
          Alert.alert ('Error, los valores ingresados son menores al monto del presupuesto');
        }  
      } else {
        if(Platform.OS === 'web') {
          window.alert ('Actualización completa');
        } else {
          Alert.alert ('Actualización completa');
        }
          setGastos(parseFloat(renta) + parseFloat(comida) + parseFloat(transporte)
          + parseFloat(servicios) + parseFloat(entretenimiento) + parseFloat(otros));
      }
    }
  
  if(valido) {
    return (
      <View style={styles.container}>

        <View style={styles.logo}>
          <Text style={styles.logotexto}>AHORRO+</Text>
        </View>

        <View style={styles.pp}>
            <Text style={styles.subtitulo1}>Distribución del presupuesto: {presupuesto}</Text>
            <TextInput
            style={styles.recuadro}
            placeholder='Ahorros:'
            value = {ahorros}
            onChangeText={setAhorros}
            maxLength={100}
            inputMode='numeric'
            />
            <TextInput
            style={styles.recuadro}
            placeholder='Renta:'
            value = {renta}
            onChangeText={setRenta}
            maxLength={100}
            inputMode='numeric'
            />
            <TextInput
            style={styles.recuadro}
            placeholder='Comida:'
            value = {comida}
            onChangeText={setComida}
            maxLength={100}
            inputMode='numeric'
            />
            <TextInput
            style={styles.recuadro}
            placeholder='Transporte:'
            value = {transporte}
            onChangeText={setTransporte}
            maxLength={100}
            inputMode='numeric'
            />
            <TextInput
            style={styles.recuadro}
            placeholder='Servicios:'
            value = {servicios}
            onChangeText={setServicios}
            maxLength={100}
            inputMode='numeric'
            />
            <TextInput
            style={styles.recuadro}
            placeholder='Entretenimiento:'
            value = {entretenimiento}
            onChangeText={setEntretenimiento}
            maxLength={100}
            inputMode='numeric'
            />
            <TextInput
            style={styles.recuadro}
            placeholder='Otros:'
            value = {otros}
            onChangeText={setOtros}
            maxLength={100}
            inputMode='numeric'
            />
        </View>

        <View style={styles.tp}>
          <TouchableOpacity 
          style={styles.boton}
          onPress={mostrarAlerta}>
            <Text style={styles.textoBoton}>Actualizar</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.boton}
          onPress={()=>{setValido(false)}}>
            <Text style={styles.textoBoton}>Volver</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }

    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Text style={styles.logotexto}>AHORRO+</Text>
        </View>
        
        <View style={styles.pp}>
          <Text style={styles.titulo}>Resumen Mensual</Text>
        </View>

        <View style={styles.sp}>
          <Text style={styles.subtitulo1}>Distribución del presupuesto: {presupuesto}</Text>
          <Text style={styles.subtitulo}>Ahorros: {(parseFloat(ahorros)/parseFloat(presupuesto))*100}%</Text>
          <Text style={styles.subtitulo}>Renta: {(parseFloat(renta)/parseFloat(presupuesto))*100}%</Text>
          <Text style={styles.subtitulo}>Comida: {(parseFloat(comida)/parseFloat(presupuesto))*100}%</Text>
          <Text style={styles.subtitulo}>Transporte: {(parseFloat(transporte)/parseFloat(presupuesto))*100}%</Text>
          <Text style={styles.subtitulo}>Servicios: {(parseFloat(servicios)/parseFloat(presupuesto))*100}%</Text>
          <Text style={styles.subtitulo}>Entretenimiento: {(parseFloat(entretenimiento)/parseFloat(presupuesto))*100}%</Text>
          <Text style={styles.subtitulo}>Otros: {(parseFloat(otros)/parseFloat(presupuesto))*100}%</Text>
        </View>

        <View style={styles.tp}>
          <Text style={styles.subtitulo1}>Ahorros: {ahorros}</Text>
          <Text style={styles.subtitulo1}>Gastos: {gastos}</Text>
          <TouchableOpacity 
            style={styles.boton}
            onPress={()=>{setValido(true)}}>
              <Text style={styles.textoBoton}>Modificar distribución</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#007A83',
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
  pp: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 55,
    fontWeight: '300',
    marginBottom: 25,
    color: '#ffffff',
  },
  sp: {
    flex: 18,
    justifyContent: 'center',
    alignItems: 'start',
    width: 340,
    height: 30,
  },
  subtitulo: {
    fontSize: 18,
    marginBottom: 1,
    color: '#ffffff',
    fontWeight: '500',
    width: 340,
    height: 30,
  },
  subtitulo1: {
    fontSize: 21,
    color: '#ffffff',
    marginBottom: 3,
    fontWeight: '500',
  },
  tp: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boton:{
    marginTop:20,
    gap:20,
    backgroundColor: '#ffffff',
    borderRadius: 18,
    width: 260,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBoton: {
    color: '#007A83',
    fontSize: 23,
    fontWeight: '400',
  },
  recuadro: {
    borderWidth: 1,
    borderColor: 'white',
    width: 320,
    height: 45,
    marginBottom: 15,
    backgroundColor: 'white',
    borderRadius: 18,
    fontSize: 20,
    color: 'black',
  },
})