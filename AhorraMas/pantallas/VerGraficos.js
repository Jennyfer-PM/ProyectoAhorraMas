import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Graficas() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Gráficas</Text>
      </View>

      <ScrollView style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Gráfica de Presupuesto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Gráfica de Gastos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Gráfica de Ingresos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Gráfica por Categorías</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Gráfica Mensual</Text>
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
    backgroundColor: '#f8f8f8',
  },
  header: {
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
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