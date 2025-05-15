import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DiaryFormScreen from '../screens/DiaryFormScreen';
import DiaryDetailScreen from '../screens/DiaryDetailScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Novo Diário" component={DiaryFormScreen} />
      <Stack.Screen name="Detalhes" component={DiaryDetailScreen} />
    </Stack.Navigator>
  );
}
