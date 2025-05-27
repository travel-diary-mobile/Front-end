import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { DiarioContext } from '../context/DiarioContext';

export default function Favoritos({ navigation }) {
  const { diarios } = useContext(DiarioContext);

  const favoritos = diarios.filter(d => d.favorito);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favoritos</Text>

      {favoritos.length === 0 ? (
        <Text style={styles.semFavoritos}>Nenhum diário favorito.</Text>
      ) : (
        <FlatList
          data={favoritos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate('Visualizar', { diario: item })}
            >
              <Text style={styles.itemTitulo}>{item.titulo}</Text>
              <Text style={styles.itemDestino}>{item.destino}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 28, color: '#7B2CBF', marginBottom: 20 },
  semFavoritos: { fontSize: 16, color: '#999' },
  item: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f2e9f7',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2
  },
  itemTitulo: { fontSize: 18, fontWeight: 'bold', color: '#7B2CBF' },
  itemDestino: { fontSize: 14, color: '#555' }
});
