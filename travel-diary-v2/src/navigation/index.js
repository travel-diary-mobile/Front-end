import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicial from '../pages/Inicial';
import Favoritos from '../pages/Favoritos';
import Adicionar from '../pages/Adicionar';
import Editar from '../pages/Editar';
import Visualizar from '../pages/Visualizar';

const Stack = createNativeStackNavigator();

export default function Navegacao() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial">
        <Stack.Screen name="Inicial" component={Inicial} />
        <Stack.Screen name="Favoritos" component={Favoritos} />
        <Stack.Screen name="Adicionar" component={Adicionar} />
        <Stack.Screen name="Editar" component={Editar} />
        <Stack.Screen name="Visualizar" component={Visualizar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
