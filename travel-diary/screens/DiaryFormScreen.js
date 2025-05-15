import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, Image, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { criarDiarioViagem } from '../api/viagens';

export default function CriarViagemScreen() {
  const [imagem, setImagem] = useState(null);
  const [preview, setPreview] = useState(null);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [destino, setDestino] = useState('');
  const [dataViagem, setDataViagem] = useState('');

  const handleSelecionarImagem = async () => {
    const permissao = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissao.granted) {
      alert('Permissão para acessar a galeria é necessária!');
      return;
    }

    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      quality: 0.7,
    });

    if (!resultado.canceled) {
      setImagem(resultado.assets[0]);
      setPreview(resultado.assets[0].uri);
    }
  };

  const handleCriarViagem = async () => {
    try {
      if (!imagem) {
        Alert.alert('Erro', 'Por favor, selecione uma imagem.');
        return;
      }

      const viagem = {
        titulo,
        descricao,
        destino,
        dataViagem,
        imagemBase64: imagem.base64,
      };

      const result = await criarDiarioViagem(viagem);
      console.log('Viagem criada:', result);
      Alert.alert('Sucesso', 'Viagem criada com sucesso!');
    } catch (error) {
      console.error('Erro ao criar viagem:', error.response?.data || error.message);
      Alert.alert('Erro', 'Erro ao criar a viagem. Verifique os dados.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Título" value={titulo} onChangeText={setTitulo} />
      <TextInput style={styles.input} placeholder="Descrição" value={descricao} onChangeText={setDescricao} />
      <TextInput style={styles.input} placeholder="Destino" value={destino} onChangeText={setDestino} />
      <TextInput style={styles.input} placeholder="Data da Viagem (YYYY-MM-DD)" value={dataViagem} onChangeText={setDataViagem} />

      <Pressable style={styles.imageBox} onPress={handleSelecionarImagem}>
        {preview ? (
          <Image source={{ uri: preview }} style={styles.previewImage} />
        ) : (
          <>
            <Text style={styles.imageIcon}>📷</Text>
            <Text style={styles.imageText}>Toque para selecionar uma imagem</Text>
          </>
        )}
      </Pressable>

      <Button title="Criar Viagem" onPress={handleCriarViagem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    padding: 10,
    borderRadius: 5,
  },
  imageBox: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#999',
    backgroundColor: '#f5f5f5',
    height: 180,
    borderRadius: 12,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  imageIcon: {
    fontSize: 30,
    marginBottom: 8,
  },
  imageText: {
    color: '#777',
    fontSize: 14,
    textAlign: 'center',
  },
  previewImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
});
