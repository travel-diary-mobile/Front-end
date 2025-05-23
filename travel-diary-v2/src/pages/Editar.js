import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { DiarioContext } from '../context/DiarioContext';

export default function Editar({ route, navigation }) {
  const { diario } = route.params;
  const [titulo, setTitulo] = useState(diario.titulo);
  const [descricao, setDescricao] = useState(diario.descricao);
  const [destino, setDestino] = useState(diario.destino);
  const [dataViagem, setDataViagem] = useState(diario.dataViagem);
  const [imagemBase64, setImagemBase64] = useState(diario.imagemBase64);

  const { editar } = useContext(DiarioContext);

  const salvar = () => {
    editar(diario.id, titulo, descricao, destino, dataViagem, imagemBase64);
    navigation.navigate('Inicial');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Diário</Text>
      <TextInput value={titulo} onChangeText={setTitulo} style={styles.input} />
      <TextInput value={descricao} onChangeText={setDescricao} style={styles.input} />
      <TextInput value={destino} onChangeText={setDestino} style={styles.input} />
      <TextInput value={dataViagem} onChangeText={setDataViagem} style={styles.input} />
      <TextInput value={imagemBase64} onChangeText={setImagemBase64} style={styles.input} />
      <Button title="Salvar Alterações" onPress={salvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#7B2CBF', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 10, padding: 10, marginBottom: 10 },
});
