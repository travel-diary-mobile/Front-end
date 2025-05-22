import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function CartaoDiario({ diario }) {
  return (
    <View style={estilos.cartao}>
      <Image source={diario.imagem} style={estilos.imagem} />
      <View style={estilos.conteudo}>
        <Text style={estilos.titulo}>{diario.titulo}</Text>
        <Text style={estilos.descricao}>{diario.descricao}</Text>
      </View>
      <Text style={estilos.data}>{diario.data}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  cartao: {
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  imagem: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  conteudo: {
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  descricao: {
    color: '#666',
    fontSize: 12,
  },
  data: {
    fontSize: 12,
    color: '#999',
    right: 1,
  },
});
