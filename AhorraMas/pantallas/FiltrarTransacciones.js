import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default function FiltrarTransacciones(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Filtrar Transacciones</Text>
        </View>

        <ScrollView style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Todas las transacciones</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Solo ingresos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Solo gastos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Por categoría</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Por fecha</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Por monto</Text>
          </TouchableOpacity>
        </ScrollView>

        <TouchableOpacity style={styles.botonAplicar}>
          <Text style={styles.botonTexto}>Aplicar filtros</Text>
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
  botonAplicar: {
    backgroundColor: '#ffffffff',
    margin: 16,
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  botonTexto: {
    color: '#007A83',
    fontSize: 16,
    fontWeight: 'bold',
  },
})