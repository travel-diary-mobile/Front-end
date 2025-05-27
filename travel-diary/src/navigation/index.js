
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../pages/Splash';
import Inicial from '../pages/Inicial';
import Adicionar from '../pages/Adicionar';
import Editar from '../pages/Editar';
import Visualizar from '../pages/Visualizar';
import Favoritos from '../pages/Favoritos';

const Stack = createNativeStackNavigator();

export default function Navegacao() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Inicial" component={Inicial} />
        <Stack.Screen name="Adicionar" component={Adicionar} />
        <Stack.Screen name="Editar" component={Editar} />
        <Stack.Screen name="Visualizar" component={Visualizar} />
        <Stack.Screen name="Favoritos" component={Favoritos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
