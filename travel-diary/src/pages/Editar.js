import React, { useState, useContext } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView, Image, Alert, Dimensions } from 'react-native';
import { DiarioContext } from '../context/DiarioContext';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';

export default function Editar({ route, navigation }) {
  const { editar } = useContext(DiarioContext);
  const { diario } = route.params;

  const [titulo, setTitulo] = useState(diario.titulo);
  const [descricao, setDescricao] = useState(diario.descricao);
  const [destino, setDestino] = useState(diario.destino);
  const [dataViagem, setDataViagem] = useState(diario.dataViagem.toString());
  const [imagemBase64, setImagemBase64] = useState(diario.imagemBase64 || '');

  const selecionarImagem = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'Permita acesso à galeria para selecionar uma imagem.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      quality: 0.7,
    });

    if (!result.cancelled) {
      setImagemBase64(result.base64);
    }
  };

  const handleDataChange = (text) => {
    const cleanText = text.replace(/[^0-9]/g, '');
    if (cleanText.length <= 8) {
      setDataViagem(cleanText);
    }
  };

  const formatarData = (data) => {
    if (data.length === 8) {
      return `${data.substr(0, 2)}/${data.substr(2, 2)}/${data.substr(4, 4)}`;
    }
    return data;
  };

  const salvar = () => {
    if (dataViagem.length !== 8) {
      Alert.alert('Erro', 'A data deve conter exatamente 8 números no formato DDMMAAAA.');
      return;
    }
    editar(diario.id, titulo, descricao, destino, dataViagem, imagemBase64);
    navigation.navigate('Inicial');
  };

  const screenWidth = Dimensions.get('window').width;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Editar Diário</Text>

      <TouchableOpacity style={[styles.imagemContainer, { width: screenWidth * 0.9 }]} onPress={selecionarImagem}>
        {imagemBase64 ? (
          <Image
            source={{ uri: `data:image/png;base64,${imagemBase64}` }}
            style={styles.imagemPreview}
          />
        ) : (
          <Text style={styles.mais}>+</Text>
        )}
      </TouchableOpacity>

      <View style={styles.labelInput}>
        <Text style={styles.label}>Título:</Text>
        <TextInput
          style={styles.input}
          value={titulo}
          onChangeText={setTitulo}
        />
      </View>

      <View style={styles.labelInput}>
        <Text style={styles.label}>Descrição:</Text>
        <TextInput
          style={[styles.input, { height: 100 }]}
          value={descricao}
          onChangeText={setDescricao}
          multiline
        />
      </View>

      <View style={styles.labelInput}>
        <Text style={styles.label}>Destino:</Text>
        <TextInput
          style={styles.input}
          value={destino}
          onChangeText={setDestino}
        />
      </View>

      <View style={styles.labelInput}>
        <Text style={styles.label}>Data:</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/AAAA"
          value={formatarData(dataViagem)}
          onChangeText={handleDataChange}
          keyboardType="numeric"
          maxLength={10}
        />
      </View>

      <View style={styles.botoes}>
        <TouchableOpacity style={styles.botaoCancelar} onPress={() => navigation.goBack()}>
          <Text style={styles.textoCancelar}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={salvar} style={{ flex: 1 }}>
          <LinearGradient colors={['#A259FF', '#7B2CBF']} style={styles.botaoAdicionar}>
            <Text style={styles.textoAdicionar}>Confirmar</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#7B2CBF',
    marginBottom: 20,
  },
  imagemContainer: {
    aspectRatio: 16 / 9,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  mais: {
    fontSize: 40,
    color: '#7B2CBF',
  },
  imagemPreview: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  labelInput: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    color: '#7B2CBF',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    width: '100%',
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  botaoCancelar: {
    borderWidth: 1,
    borderColor: '#7B2CBF',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
  },
  textoCancelar: {
    color: '#7B2CBF',
    fontWeight: 'bold',
  },
  botaoAdicionar: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  textoAdicionar: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
