import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function DiarioCard({ diario, onVisualizar }) {
  return (
    <TouchableOpacity onPress={() => onVisualizar(diario.id)} style={styles.card}>
      {diario.imagemBase64 && (
        <Image source={{ uri: `data:image/png;base64,${diario.imagemBase64}` }} style={styles.image} />
      )}
      <View>
        <Text style={styles.titulo}>{diario.titulo}</Text>
        <Text style={styles.descricao}>{diario.descricao}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    elevation: 3,
  },
  image: { width: 60, height: 60, borderRadius: 8, marginRight: 10 },
  titulo: { fontWeight: 'bold', fontSize: 16, color: '#7B2CBF' },
  descricao: { color: '#555' },
});
