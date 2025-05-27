import React, { useContext } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DiarioContext } from '../context/DiarioContext';

export default function Inicial({ navigation }) {
  const { diarios, favoritar } = useContext(DiarioContext);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        console.log('Navegando para Visualizar:', item);
        navigation.navigate('Visualizar', { diario: item });
      }}
    >
      <View style={styles.itemContent}>
        <Text style={styles.itemTitulo}>{item.titulo}</Text>
        <Text style={styles.itemDestino}>{item.destino}</Text>
      </View>
      <TouchableOpacity onPress={() => favoritar(item.id)}>
        <Text style={styles.favorito}>{item.favorito ? '★' : '☆'}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Diários</Text>

      <FlatList
        data={diarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Adicionar')}>
        <Text style={styles.botaoTexto}>Novo Diário</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  title: { fontSize: 28, color: '#7B2CBF', marginBottom: 20 },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center'
  },
  itemContent: { flexDirection: 'column' },
  itemTitulo: { fontSize: 18, fontWeight: 'bold', color: '#7B2CBF' },
  itemDestino: { fontSize: 14, color: '#555' },
  favorito: { fontSize: 24, color: '#7B2CBF' },
  botao: {
    backgroundColor: '#7B2CBF',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center'
  },
  botaoTexto: { color: '#fff', fontWeight: 'bold' }
});
