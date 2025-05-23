import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { DiarioContext } from '../context/DiarioContext';
import DiarioCard from '../components/DiarioCard';

export default function Inicial({ navigation }) {
  const { diarios, deletar, favoritar } = useContext(DiarioContext);

  const handleVisualizar = (id) => {
    navigation.navigate('Visualizar', { id });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diários</Text>
      <FlatList
        data={diarios}
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
      <Button title="Adicionar Diário" onPress={() => navigation.navigate('Adicionar')} />
      <Button title="Ver Favoritos" onPress={() => navigation.navigate('Favoritos')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#7B2CBF', marginBottom: 20 },
});
