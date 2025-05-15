import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import api from '../api/api';

export default function HomeScreen({ navigation }) {
  const [diarios, setDiarios] = useState([]);

  useEffect(() => {
    api.get('/diarios')
      .then(response => setDiarios(response.data))
      .catch(error => console.error('Erro ao buscar diários:', error));
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Button title="Novo Diário" onPress={() => navigation.navigate('Novo Diário')} />
      <FlatList
        data={diarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detalhes', { id: item.id })}>
            <Text style={{ padding: 10, fontSize: 18 }}>{item.titulo} - {item.destino}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
