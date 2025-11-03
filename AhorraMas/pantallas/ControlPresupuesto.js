import { Text, StyleSheet, View, TextInput, Alert, Platform, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function EstablecerPresupuesto(){
  const [newmonto, setNewMonto] = useState(0);
  const [monto, setMonto] = useState(0);
  const [valido, setValido] = useState(false);
  const [dia, setDia] = useState(false);
  const [mes, setMes] = useState(false);
  const [cuenta, setCuenta] = useState(false);
  const [montomes, setMontoMes] = useState(500);
  const [presupuesto, setPresupuesto] = useState(5000);


  const mostrarAlerta = () => {
    if (newmonto==0) {
      if(Platform.OS === 'web') {
        window.alert ('Error, porfavor ingresa el monto del nuevo gasto');
      } else {
        Alert.alert ('Error, porfavor ingresa el monto del nuevo gasto');
       }
      } else {
        if(Platform.OS === 'web') {
          window.alert ('Monto guardado correctamente');
        } else {
          Alert.alert ('Monto guardado correctamente');
        }
          setMonto(monto + parseFloat(newmonto));
          setMontoMes(montomes + parseFloat(newmonto));
      }
    }

  if(valido) {
    return (
      <View style={styles.container}>

        <View style={styles.logo}>
          <Text style={styles.logotexto}>AHORRO+</Text>
        </View>

        <View style={styles.pp}>
            <Text style={styles.titulo}>Control de Presupuesto</Text>
            <TextInput
            style={styles.recuadro}
            placeholder='Nuevo gasto:'
            value = {newmonto}
            onChangeText={setNewMonto}
            maxLength={100}
            />
        </View>

        <View style={styles.tp}>
          <TouchableOpacity 
          style={styles.boton}
          onPress={mostrarAlerta}>
            <Text style={styles.textoBoton}>Guardar</Text>
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

  if(dia) {
    return (
      <View style={styles.container}>

        <View style={styles.logo}>
          <Text style={styles.logotexto}>AHORRO+</Text>
        </View>

        <View style={styles.pp}>
            <Text style={styles.titulo}>Control de Presupuesto</Text>
            <Text style={styles.titulo}>Gastos del día</Text>
        </View>

        <View style={styles.sp}>
          <Text style={styles.subtitulo}>Ultimo gasto: {newmonto}</Text>
          <Text style={styles.subtitulo}>Total gastos del día: {monto}</Text>
        </View>

        <View style={styles.tp}>
          <TouchableOpacity 
          style={styles.boton}
          onPress={()=>{setDia(false)}}>
            <Text style={styles.textoBoton}>Volver</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }

  if(mes) {
    return (
      <View style={styles.container}>

        <View style={styles.logo}>
          <Text style={styles.logotexto}>AHORRO+</Text>
        </View>

        <View style={styles.pp}>
            <Text style={styles.titulo}>Control de Presupuesto</Text>
            <Text style={styles.titulo}>Gastos del ultimo mes</Text>
        </View>

        <View style={styles.sp}>
          <Text style={styles.subtitulo}>Gasto del ultimo dia: {monto}</Text>
          <Text style={styles.subtitulo}>Gastos del mes: {montomes}</Text>
        </View>

        <View style={styles.tp}>
          <TouchableOpacity 
          style={styles.boton}
          onPress={()=>{setMes(false)}}>
            <Text style={styles.textoBoton}>Volver</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }

  if(cuenta) {
    return (
      <View style={styles.container}>

        <View style={styles.logo}>
          <Text style={styles.logotexto}>AHORRO+</Text>
        </View>

        <View style={styles.pp}>
            <Text style={styles.titulo}>Control de Presupuesto</Text>
            <Text style={styles.titulo}>Estado de cuenta</Text>
        </View>

        <View style={styles.sp}>
          <Text style={styles.subtitulo}>Presupuesto del mes: {presupuesto}</Text>
          <Text style={styles.subtitulo}>Gastos del mes: {montomes}</Text>
          <Text style={styles.subtitulo}>Restante: {parseFloat(presupuesto) - parseFloat(montomes)}</Text>
        </View>

        <View style={styles.tp}>
          <TouchableOpacity 
          style={styles.boton}
          onPress={()=>{setCuenta(false)}}>
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
            <Text style={styles.titulo}>Control de Presupuesto</Text>
            <TouchableOpacity 
            style={styles.boton}
            onPress={()=>{setDia(true)}}>
              <Text style={styles.textoBoton}>Gastos del día</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.boton}
            onPress={()=>{setMes(true)}}>
              <Text style={styles.textoBoton}>Gastos del mes</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.boton}
            onPress={()=>{setCuenta(true)}}>
              <Text style={styles.textoBoton}>Estado de cuenta</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.tp}>
          <TouchableOpacity 
          style={styles.boton2}
          onPress={()=>{setValido(true)}}>
            <Text style={styles.textoBoton}>Actualizar</Text>
          </TouchableOpacity>
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
  logo: {
    flex: 3,
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
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sp: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tp: {
      flex: 3,
      justifyContent: 'end',
      alignItems: 'center',
  },
  titulo: {
    fontSize: 55,
    fontWeight: '300',
    marginBottom: 25,
    color: '#ffffff',
  },
  subtitulo: {
    fontSize: 20,
    marginBottom: 1,
    color: '#ffffff',
    width: 340,
    height: 45,
    fontWeight: '500',
  },
  subtitulo1: {
    fontSize: 26,
    marginBottom: 1,
    color: '#ffffff',
    width: 340,
    height: 45,
    fontWeight: '500',
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
  boton2:{
    marginTop:20,
    gap:20,
    backgroundColor: '#ffffff',
    borderRadius: 18,
    width: 160,
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