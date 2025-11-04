import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Menu from './pantallas/Menu';
import PagInicio from './pantallas/PagInicio';
import Registro from './pantallas/Registro';
import MenuApp from './pantallas/MenuApp';
import Perfil from './pantallas/Perfil';
import EditarPerfil from './pantallas/EditarPerfil';
import ControlPresupuesto from './pantallas/ControlPresupuesto';
import EstablecerPresupuesto from './pantallas/EstablecerPresupuesto';
import FiltrarTransacciones from './pantallas/FiltrarTransacciones';
import GestionarTransacciones from './pantallas/GestionarTransacciones';
import RegistrarTransacciones from './pantallas/RegistrarTransacciones';
import ResumenMensual from './pantallas/ResumenMensual';
import VerGraficos from './pantallas/VerGraficos';

const Stack = createNativeStackNavigator();

export default function Aplicacion() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PagInicio" screenOptions={{
        headerStyle: {
          backgroundColor: '#007A83',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="PagInicio" component={PagInicio} options={{ title: 'Inicio' }} />
        <Stack.Screen name="Registro" component={Registro} options={{ title: 'Registro' }} />
        <Stack.Screen name="Menu" component={Menu} options={{ title: 'Menú Principal' }} />
        <Stack.Screen name="MenuApp" component={MenuApp} options={{ title: 'Menú de la App' }} />
        <Stack.Screen name="Perfil" component={Perfil} options={{ title: 'Mi Perfil' }} />
        <Stack.Screen name="EditarPerfil" component={EditarPerfil} options={{ title: 'Editar Perfil' }} />
        <Stack.Screen name="ControlPresupuesto" component={ControlPresupuesto} options={{ title: 'Control de Presupuesto' }} />
        <Stack.Screen name="EstablecerPresupuesto" component={EstablecerPresupuesto} options={{ title: 'Establecer Presupuesto' }} />
        <Stack.Screen name="FiltrarTransacciones" component={FiltrarTransacciones} options={{ title: 'Filtrar Transacciones' }} />
        <Stack.Screen name="GestionarTransacciones" component={GestionarTransacciones} options={{ title: 'Gestionar Transacciones' }} />
        <Stack.Screen name="RegistrarTransacciones" component={RegistrarTransacciones} options={{ title: 'Registrar Transacciones' }} />
        <Stack.Screen name="ResumenMensual" component={ResumenMensual} options={{ title: 'Resumen Mensual' }} />
        <Stack.Screen name="VerGraficos" component={VerGraficos} options={{ title: 'Gráficos' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
