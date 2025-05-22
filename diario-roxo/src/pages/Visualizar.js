import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { buscarDiarioPorId, deletarDiario } from '../services/api';
import { DiarioContext } from '../context/DiarioContext';

export default function Visualizar({ route, navigation }) {
  const { id } = route.params;
  const [diario, setDiario] = useState(null);
  const { favoritar } = useContext(DiarioContext);

  useEffect(() => {
    carregarDiario();
  }, []);

  const carregarDiario = async () => {
    const resultado = await buscarDiarioPorId(id);
    setDiario(resultado);
  };

  const excluir = async () => {
    await deletarDiario(id);
    navigation.navigate('Inicial');
  };

  if (!diario) return <Text>Carregando...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{diario.titulo}</Text>
      <Text>{diario.descricao}</Text>
      <Text>Destino: {diario.destino}</Text>
      <Text>Data: {diario.dataViagem}</Text>
      {diario.imagemBase64 ? <Image source={{ uri: `data:image/png;base64,${diario.imagemBase64}` }} style={{ width: 100, height: 100 }} /> : null}
      <Button title="Editar" onPress={() => navigation.navigate('Editar', { diario })} />
      <Button title="Favoritar" onPress={() => favoritar(diario.id)} />
      <Button title="Excluir" onPress={excluir} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#7B2CBF', marginBottom: 20 },
});
