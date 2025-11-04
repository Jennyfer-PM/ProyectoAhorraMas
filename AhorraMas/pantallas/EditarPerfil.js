import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function EditarPerfil() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')

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
        
        <TouchableOpacity style={styles.botonGuardar}>
          <Text style={styles.textoBoton}>Guardar Cambios</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.botonCancelar}>
          <Text style={styles.textoCancelar}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    )
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
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
    flex: 1,
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
    backgroundColor: '#007A83',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  botonCancelar: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#007A83',
  },
  textoBoton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  textoCancelar: {
    color: '#007A83',
    fontSize: 16,
    fontWeight: '600',
  },
})