import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function DiarioCard({ diario, onVisualizar, onDeletar, onFavoritar }) {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{diario.titulo}</Text>
      <Text>{diario.descricao}</Text>
      {diario.imagemBase64 ? (
        <Image source={{ uri: `data:image/png;base64,${diario.imagemBase64}` }} style={{ width: 100, height: 100 }} />
      ) : null}
      <View style={styles.botoes}>
        <Button title="Visualizar" onPress={() => onVisualizar(diario.id)} />
        <Button title="Deletar" onPress={() => onDeletar(diario.id)} />
        <Button title={diario.favorito ? "Desfavoritar" : "Favoritar"} onPress={() => onFavoritar(diario.id)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E0BBE4',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
