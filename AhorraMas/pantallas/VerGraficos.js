import { Text, StyleSheet, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const graficaVentas = require('../assets/Graf12.jpg'); 

export default function VerGraficos() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Gráficas</Text>
      </View>

      <View style={styles.graficaContainer}>
        <Text style={styles.graficaTitulo}>Gráfica de Ventas Semanales y Mensuales</Text>
        <Image 
          source={graficaVentas} 
          style={styles.graficaImagen} 
          resizeMode="contain"
        />
      </View>

      <ScrollView style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Gráfica de Presupuesto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Comparativo Anual</Text>
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity style={styles.botonGenerar}>
        <Text style={styles.botonTexto}>Generar Gráficas</Text>
      </TouchableOpacity>
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
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffffff',
  },
  graficaContainer: {
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    marginTop: 10,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  graficaTitulo: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#555',
  },
  graficaImagen: {
    width: '100%', 
    height: 300,   
  },
  menuContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  menuItem: {
    backgroundColor: '#ffffff',
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    marginBottom: 8,
    borderRadius: 8,
  },
  menuText: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '500',
  },
  botonGenerar: {
    backgroundColor: '#007AFF',
    margin: 16,
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  botonTexto: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
