import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import PagInicio from './PagInicio';
import Registro from './Registro';
import MenuApp from './MenuApp';


export default function Menu() {
  const [screen, setScreen] = useState('menu');

  switch(screen){
    case 'Inicio': 
        return <PagInicio/>;
    case 'Registro':
        return <Registro/>;
    case 'MenuApp':
        return <MenuApp/>;
    case 'menu':
        default:
        return (
            <View style={styles.container}>
                <Text style={styles.menu}> Menu</Text>
                <View style={styles.botoncitos}>
                <Button color='#007A83' onPress={()=>setScreen('Inicioo')} title='Página de inicio'></Button>
                <Button color='#007A83' onPress={()=>setScreen('Registro')} title='Página de registro'></Button>
                <Button color='#007A83' onPress={()=>setScreen('MenuApp')} title='Menu de la App'></Button>
                </View>
            </View>
    )
  }
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