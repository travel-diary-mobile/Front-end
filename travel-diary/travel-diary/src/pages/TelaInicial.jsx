import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import CartaoDiario from '../components/CartaoDiario/CartaoDiario';
import Header from '../components/Header/Header'; 
import { LinearGradient } from 'expo-linear-gradient'; 

export default function TelaInicial() {
  const [diarios, setDiarios] = useState([
    {
      id: '1',
      titulo: 'Os mares de Londres',
      data: '20/09',
      descricao: 'Tive uma ótima experiência em Londres',
    },
    {
      id: '2',
      titulo: 'Paris e suas luzes',
      data: '12/08',
      descricao: 'Paris já é linda, e com minha melhor amiga ainda melhor!',
    },
  ]);

  const adicionarDiario = () => {
    const novoDiario = {
      id: Date.now().toString(),
      titulo: 'Novo Diário',
      data: '13/05',
      descricao: 'Essa é uma nova aventura adicionada!',
    };
    setDiarios([novoDiario, ...diarios]);
  };

  return (
    <View style={estilos.container}>
      
      <Header />

      <FlatList
        data={diarios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartaoDiario diario={item} />}
        contentContainerStyle={estilos.lista}
      />

      <View style={estilos.rodape}>
        <TouchableOpacity style={estilos.botaoIcone}>
          <Image source={require('../assets/salvar.png')} style={estilos.iconeSalvar} />
        </TouchableOpacity>

          
        <LinearGradient
          colors={['#7b3ca5', '#a974e8']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={estilos.botaoGradiente}
        >
          <TouchableOpacity style={estilos.botaoSemCor} onPress={adicionarDiario}>
            <Text style={estilos.textoBotao}>Novo Diário</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f1ff' },
  lista: {
    padding: 20,
    paddingBottom: 120,
    gap: 1,
  },
  rodape: {
    position: 'absolute',
    bottom: 20,
    left: 13,
    right: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  botaoIcone: {
    width: 50,
    height: 50,
    backgroundColor: '#f8f1ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 55,
    paddingVertical: 30,
    borderWidth: 2,
    borderColor: '#501B82',
  },
  
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
  iconeSalvar: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  
  botaoGradiente: {
    borderRadius: 10,
    paddingHorizontal: 80,
    paddingVertical: 20,
    overflow: 'hidden',
  },
  
  botaoSemCor: {
    alignItems: 'center',
  },
  
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
  
});
