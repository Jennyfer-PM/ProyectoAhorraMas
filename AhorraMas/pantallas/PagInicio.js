import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default function PagInicio({navigation}){
    return (
      <View style={styles.container}>
        <View style={styles.pp}>
        <Text style={styles.titulo}>AHORRO+</Text>
        <Text style={styles.subtitulo}>Gestiona tu dinero de forma simple e inteligente.</Text>
        </View>

        <View style={styles.sp}>
        <TouchableOpacity 
        style={styles.boton}
        onPress={() => navigation.navigate('Registro')}>
          <Text style={styles.textoBoton}>Registrarse ahora</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.boton}
        onPress={() => navigation.navigate('MenuApp')}>
          <Text style={styles.textoBoton}>Iniciar sesión</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.tp}>
        <Text style={styles.subtitulo}>Tu presupuesto, bajo control.</Text>
        </View>

      </View>
      
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#007A83',
  },
  pp: {
    flex: 2,
    padding: 20,
    backgroundColor: '#007A83',
  },
  sp: {
    flex: 7,
    padding: 20,
    backgroundColor: '#007A83',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tp: {
    flex: 1,
    padding: 20,
    backgroundColor: '#007A83',
    justifyContent: 'center',
    alignItems: 'end',
  },
  boton:{
    marginTop: 30,
    flexDirection:'column',
    gap: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    width: 250,
    height: 50,
  },
  textoBoton: {
    color: '#007A83',
    fontSize: 23,
    fontWeight: '300',
  },
  titulo: {
    flex: 1,
    color: '#ffffff',
    justifyContent: 'start',
    alignItems: 'start',
    fontWeight: 'bold',
    fontSize: 40,
  },
  subtitulo: {
    color: '#ffffff',
    justifyContent: 'start',
    alignItems: 'start',
    fontSize: 20,
  },
})