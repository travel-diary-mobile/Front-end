import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { DiarioContext } from '../context/DiarioContext';
import DiarioCard from '../components/DiarioCard';

export default function Favoritos({ navigation }) {
  const { diarios, deletar, favoritar } = useContext(DiarioContext);
  const favoritos = diarios.filter(d => d.favorito);

  const handleVisualizar = (id) => {
    navigation.navigate('Visualizar', { id });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favoritos</Text>
      <FlatList
        data={favoritos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <DiarioCard
            diario={item}
            onVisualizar={handleVisualizar}
            onDeletar={deletar}
            onFavoritar={favoritar}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#7B2CBF', marginBottom: 20 },
});
