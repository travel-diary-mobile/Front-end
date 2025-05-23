import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { DiarioContext } from '../context/DiarioContext';

export default function Adicionar({ navigation }) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [destino, setDestino] = useState('');
  const [dataViagem, setDataViagem] = useState('');
  const [imagemBase64, setImagemBase64] = useState('');

  const { adicionar } = useContext(DiarioContext);

  const salvar = () => {
    adicionar(titulo, descricao, destino, dataViagem, imagemBase64);
    navigation.navigate('Inicial');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Diário</Text>
      <TextInput placeholder="Título" value={titulo} onChangeText={setTitulo} style={styles.input} />
      <TextInput placeholder="Descrição" value={descricao} onChangeText={setDescricao} style={styles.input} />
      <TextInput placeholder="Destino" value={destino} onChangeText={setDestino} style={styles.input} />
      <TextInput placeholder="Data da Viagem" value={dataViagem} onChangeText={setDataViagem} style={styles.input} />
      <TextInput placeholder="Imagem Base64" value={imagemBase64} onChangeText={setImagemBase64} style={styles.input} />
      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#7B2CBF', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 10, padding: 10, marginBottom: 10 },
});
