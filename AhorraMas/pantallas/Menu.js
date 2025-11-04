import { Text, StyleSheet, View, Button } from 'react-native'
import React from 'react'

export default function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.menu}> Menu</Text>
      <View style={styles.botoncitos}>
        <Button color='#007A83' onPress={() => navigation.navigate('PagInicio')} title='Página de inicio' />
        <Button color='#007A83' onPress={() => navigation.navigate('Registro')} title='Página de registro' />
        <Button color='#007A83' onPress={() => navigation.navigate('MenuApp')} title='Menu de la App' />
        <Button color='#007A83' onPress={() => navigation.navigate('Perfil')} title='Perfil' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      },
    menu: {
      color:'#007A83',
      fontSize:40,
      fontFamily: 'Times New Roman',
      fontWeight: 'bold',
    },
    botoncitos:{
      marginTop:20,
      flexDirection:'column',
      gap:20,
    },
})