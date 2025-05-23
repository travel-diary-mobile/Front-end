import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { DiarioContext } from '../context/DiarioContext';

export default function Visualizar({ route, navigation }) {
  const { diario } = route.params || {};  // ✅ Tratamento caso route.params seja undefined
  const { deletar } = useContext(DiarioContext);

  if (!diario) {
    return (
      <View style={styles.erroContainer}>
        <Text style={styles.erroTexto}>Erro: diário não encontrado.</Text>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Inicial')}>
          <Text style={styles.textoBotao}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const excluir = () => {
    deletar(diario.id);
    navigation.navigate('Inicial');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topImageContainer}>
        {diario.imagemBase64 ? (
          <Image source={{ uri: `data:image/png;base64,${diario.imagemBase64}` }} style={styles.topImage} />
        ) : null}
        <Text style={styles.overlayTitle}>{diario.titulo}</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.divider} />

        <View style={styles.headerRow}>
          <Text style={styles.cardTitle}>{diario.destino}</Text>
          <Text style={styles.date}>{formatarData(diario.dataViagem)}</Text>
        </View>

        <Text style={styles.subTitle}>Roteiro de viagem</Text>
        <Text style={styles.description}>{diario.descricao}</Text>

        <View style={styles.tags}>
          <Text style={styles.tag}>#PasseiodeBarco</Text>
          <Text style={styles.tag}>#ComiMuito</Text>
          <Text style={styles.tag}>#Comprinhas</Text>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.deleteButton} onPress={excluir}>
            <Text style={styles.deleteText}>Deletar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('Editar', { diario })}>
            <Text style={styles.editText}>Editar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

function formatarData(data) {
  const str = data.toString();
  if (str.length === 8) {
    return `${str.substring(0, 2)}/${str.substring(2, 4)}`;
  }
  return str;
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  topImageContainer: { position: 'relative', height: 200 },
  topImage: { width: '100%', height: '100%' },
  overlayTitle: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4
  },
  card: {
    backgroundColor: '#fff',
    marginTop: -20,
    marginHorizontal: 10,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3
  },
  divider: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 10
  },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardTitle: { fontSize: 20, fontWeight: 'bold' },
  date: { color: '#ccc' },
  subTitle: { color: '#7B2CBF', fontWeight: 'bold', marginTop: 15, marginBottom: 5 },
  description: { marginBottom: 15 },
  tags: { flexDirection: 'row', flexWrap: 'wrap', gap: 5 },
  tag: {
    backgroundColor: '#f2e9f7',
    color: '#7B2CBF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 5,
    marginBottom: 5
  },
  buttons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  deleteButton: { borderWidth: 1, borderColor: '#7B2CBF', padding: 10, borderRadius: 10, flex: 1, marginRight: 5, alignItems: 'center' },
  editButton: { backgroundColor: '#7B2CBF', padding: 10, borderRadius: 10, flex: 1, marginLeft: 5, alignItems: 'center' },
  deleteText: { color: '#7B2CBF', fontWeight: 'bold' },
  editText: { color: '#fff', fontWeight: 'bold' },
  erroContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  erroTexto: { fontSize: 18, color: 'red', marginBottom: 20 },
  botao: { backgroundColor: '#7B2CBF', padding: 15, borderRadius: 10, alignItems: 'center' },
  textoBotao: { color: '#fff', fontWeight: 'bold' }
});
