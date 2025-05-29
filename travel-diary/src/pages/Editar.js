import React, { useState, useEffect, useContext } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet,  SafeAreaView, StatusBar, ScrollView, Image, Alert, Dimensions } from 'react-native';
import { DiarioContext } from '../context/DiarioContext';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import api from '../services/api';

export default function Editar({ route, navigation }) {
  const { editar } = useContext(DiarioContext);
  const { diario } = route.params;

  const [titulo, setTitulo] = useState(diario.titulo);
  const [descricao, setDescricao] = useState(diario.descricao);
  const [destino, setDestino] = useState(diario.destino);
  const [dataViagem, setDataViagem] = useState(diario.dataViagem.toString());
   const [imagemUri, setImagemUri] = useState(null);
  const [imagemBase64, setImagemBase64] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    carregarDados();
  }, []);

  const carregarDados = async () => {
    try {
      setLoading(true);
      const response = await api.put(`/${id}`);
      const diario = response.data;
      setTitulo(diario.titulo);
      setDescricao(diario.descricao);
      setDestino(diario.destino);
      setDataViagem(diario.dataViagem);
      setImagemBase64(diario.imagemBase64);
    } catch (error) {
      console.error('Erro ao carregar diario:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      quality: 0.7,
    });

    if (!result.canceled) {
      setImagemUri(result.assets[0].uri);
      setImagemBase64(result.assets[0].base64);
    }
  };

  const handleUpdate = async () => {
    setLoading(true);
    const data = {
      titulo,
      descricao: descricao,
      destino: destino,
      dataViagem,
      imagemBase64,
    };
  }

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
      <StatusBar backgroundColor="#410E73" barStyle="light-content" />
      <SafeAreaView>
      <LinearGradient
          colors={['#410E73', '#C47BFC']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={styles.header}
        >
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/aberto-branco.png')}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.siteNome}>TravelDiary</Text>
          </View>
          <StatusBar style="black" />
        </LinearGradient>
      </SafeAreaView>

      <ScrollView contentContainerStyle={styles.containerInputs}>

      <TouchableOpacity onPress={handlePickImage} disabled={loading}>
        <View style={styles.imagePlaceholder}>
          {imagemUri || imagemBase64 ? (
            <Image 
              source={{ uri: imagemUri || `data:image/png;base64,${imagemBase64}` }} 
              style={styles.image} 
            />
          ) : (
            <Text style={styles.plus}>+</Text>
          )}
        </View>
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
      </ScrollView>

      <SafeAreaView>
      <View style={styles.botoes}>
        <TouchableOpacity style={styles.botaoCancelar} onPress={() => navigation.goBack()}>
          <Text style={styles.textoCancelar}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={salvar} style={{ flex: 1 }}>
          <LinearGradient colors={['#A259FF', '#7B2CBF']} style={styles.gradiente}>
            <Text style={styles.textoAdicionar}>Confirmar</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  imagePlaceholder: {
    width: 360,
    height: 320,
    borderWidth: 2,
    borderColor: '#7B2CBF',
    borderRadius: 12,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%', 
    height: "100%",
    borderRadius: 10,
  },
  plus: {
    fontSize: 40,
    color: '#7B2CBF',
  },
  container:{
      backgroundColor: "#fff",
      height: "100%",
  },

  header: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  siteNome: {
    position: 'absolute',
    top: 28,
    right: 100, //deixa o titulo no lugar certinho, o de cima tmb
    fontSize: 22,
    color: 'white',
    fontWeight: '300', //esse deixa light (mais fino)
    fontStyle: 'italic', //italic, ai os dois juntos são "light italic"
  },
  logoContainer: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40,
  },
  logo: {
    width: 60,
    height: 70,
    position: 'absolute',
    top: 9,
    right: 210,
    resizeMode: 'contain',
  },
  containerInputs: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#7B2CBF',
    marginBottom: 15,
  },
  imagemContainer: {
    width: 360,
    height: 320,
    borderWidth: 2,
    borderColor: '#7B2CBF',
    borderRadius: 12,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  mais: {
    fontSize: 36,
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
    backgroundColor: '#f9f9f9',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    gap: 8,
  },
  tag: {
    backgroundColor: '#E0C3FC',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  tagText: {
    color: '#5A189A',
    fontWeight: 'bold',
  },
  botoes: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 0,
    marginTop:0,
    padding: 20,
    gap: 10,
  },
  botaoCancelar: {
    borderWidth: 1,
    borderColor: '#7B2CBF',
    padding: 12,
    borderRadius: 10,
    width: '40%',
    alignItems: 'center',
  },
  textoCancelar: {
    color: '#7B2CBF',
    fontWeight: 'bold',
  },
  botaoAdicionar: {
    width: '55%',
    alignItems: 'center',
  },

  gradiente: {
    padding: 13,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  textoAdicionar: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
