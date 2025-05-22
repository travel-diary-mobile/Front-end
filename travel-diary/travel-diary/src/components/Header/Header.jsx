import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 

export default function Header() {
  return (
    <LinearGradient
      colors={['#531D86', '#C47BFC']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={estilos.cabecalho}
    >
        <Image
        source={require('../../assets/aberto-branco.png')} style={estilos.logo}
      />
      <Text style={estilos.titulo}>Travel Diary</Text>
    </LinearGradient>
    
  );
}

const estilos = StyleSheet.create({
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  titulo: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '300',
  },
});
