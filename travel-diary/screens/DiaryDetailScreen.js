import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import api from '../api/api';

export default function DiaryDetailScreen({ route }) {
  const [diario, setDiario] = useState(null);
  const { id } = route.params;

  useEffect(() => {
    api.get(`/diarios/${id}`)
      .then(response => setDiario(response.data))
      .catch(error => console.error('Erro ao carregar diário:', error));
  }, [id]);

  if (!diario) {
    return <Text>Carregando...</Text>;
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{diario.titulo}</Text>
      <Text>Destino: {diario.destino}</Text>
      <Text>Descrição: {diario.descricao}</Text>
    </View>
  );
}
