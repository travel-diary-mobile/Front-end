import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Modal

 } from 'react-native';
import { DiarioContext } from '../context/DiarioContext';
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

export default function Visualizar({ route, navigation }) {
  const { diario } = route.params || {};  // ✅ Tratamento caso route.params seja undefined
  const { deletar } = useContext(DiarioContext);
  const [modalVisible, setModalVisible] = useState(false);


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
    setModalVisible(false);
    navigation.navigate('Inicial');
  };


  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#410E73" barStyle="light-content" />
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
          <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color="#fcfcfc" />
          </TouchableOpacity>
        </View>
        <StatusBar style="light" />
      </LinearGradient>

      <View style={styles.imageContainer}>
        <Image
          source={{ uri: `data:image/png;base64,${diario.imagemBase64}` }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.titulo}>{diario.titulo}</Text>
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
          <TouchableOpacity style={styles.deleteButton} onPress={() => setModalVisible(true)}>
            <Text style={styles.deleteText}>Deletar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('Editar', { diario })}>
            <Text style={styles.editText}>Editar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal de confirmação */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Tem certeza que deseja deletar este diário de viagem?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalButtonCancelar} onPress={() => setModalVisible(false)}>
                <Text style={styles.textoBotao}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButtonConfirmar} onPress={excluir}>
                <Text style={styles.textoBotao}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 12,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButtonCancelar: {
    flex: 1,
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    alignItems: 'center',
  },
  modalButtonConfirmar: {
    flex: 1,
    backgroundColor: '#7B2CBF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
  imagePlaceholder: {
    width: 360,
    height: 320,
    borderWidth: 2,
    borderColor: '#7B2CBF',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 320,
  },
  plus: {
    fontSize: 40,
    color: '#7B2CBF',
  },
  container: {
    height: "100%",
    flex: 1,
    backgroundColor: '#fff',
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
  },
  logo: {
    width: 60,
    height: 70,
    position: 'absolute',
    top: 9,
    right: 210,
    resizeMode: 'contain',
  },
  botaoVoltar: {   
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    height: 40,
    width: 40,
    alignItems: 'center',
    marginBottom: "22%",
    marginLeft: 350,
  },
  topImageContainer: { 
    position: 'relative', 
    height: 200 
  },
  topImage: { 
    width: '100%', 
    height: 250 },

  titulo: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4
  },
  card: {
    height: "100%",
    backgroundColor: '#fff',
    marginTop: -20,
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
  headerRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  cardTitle: { fontSize: 20, 
    fontWeight: 'bold' 
  },
  date: { 
    color: '#ccc' 
  },
  subTitle: { color: '#7B2CBF',
    fontWeight: 'bold', 
    marginTop: 15, 
    marginBottom: 5 
  },
  description: { 
    marginBottom: 15,
  },
  tags: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    gap: 5 
  },
  tag: {
    backgroundColor: '#f2e9f7',
    color: '#7B2CBF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 5,
    marginBottom: 5
  },
  buttons: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: "75%", 
  },
  deleteButton: { 
    borderWidth: 1, 
    borderColor: '#7B2CBF', 
    padding: 10, 
    borderRadius: 10, 
    flex: 1, 
    marginRight: 5, 
    alignItems: 'center' 
  },
  editButton: { 
    backgroundColor: '#7B2CBF', 
    padding: 10, 
    borderRadius: 10, 
    flex: 1, 
    marginLeft: 5, 
    alignItems: 'center' 
  },
  deleteText: { 
    color: '#7B2CBF', 
    fontWeight: 'bold' 
  },
  editText: { 
    color: '#fff', 
    fontWeight: 'bold' 
  },
  erroContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20 
  },
  erroTexto: { 
    fontSize: 18, 
    color: 'red', 
    marginBottom: 20 
  },
  botao: { 
    backgroundColor: '#7B2CBF', 
    padding: 15, borderRadius: 10, 
    alignItems: 'center' 
  },
  textoBotao: { 
    color: '#fff', 
    fontWeight: 'bold' 
  },
});
