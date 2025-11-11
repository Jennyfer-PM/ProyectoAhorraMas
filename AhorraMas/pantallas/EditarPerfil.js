import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function EditarPerfil() {
  const [nombre, setNombre] = useState('Usuario0001')
  const [email, setEmail] = useState('manchegoquesogmail.com')
  const [telefono, setTelefono] = useState('442 134 9674')

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Editar Perfil</Text>
      </View>
      
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
          placeholderTextColor="#999"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#999"
          keyboardType="email-address"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          value={telefono}
          onChangeText={setTelefono}
          placeholderTextColor="#999"
          keyboardType="phone-pad"
        />
        
        <TouchableOpacity style={styles.botonGuardar} onPress={mostrarAlerta}>
          <Text style={styles.textoBoton}>Guardar Cambios</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.botonCancelar}>
          <Text style={styles.textoCancelar}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007A83',
  },
  header: {
    backgroundColor: '#007A83',
    padding: 20,
    paddingBottom: 15,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  formContainer: {
    flex: 5,
    padding: 25,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  botonGuardar: {
    backgroundColor: '#ffffffff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  botonCancelar: {
    backgroundColor: '#ffffffff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  textoBoton: {
    color: '#007A83',
    fontSize: 16,
    fontWeight: '600',
  },
  textoCancelar: {
    color: '#007A83',
    fontSize: 16,
    fontWeight: '600',
  },
})