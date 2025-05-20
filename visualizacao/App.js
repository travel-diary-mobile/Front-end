import React from 'react';
import {
  View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity, ScrollView, StatusBar,

  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';



export default function TravelDiaryEntry() {
  return (

    <ScrollView contentContainerStyle={{ paddingBottom: 800 }}>
      <View style={styles.container}>

        <LinearGradient
          colors={['#410E73', '#C47BFC']}
          start={{ x: 0, y: 1 }}  // Início do gradiente (topo esquerdo)
          end={{ x: 1, y: 0 }}    // Fim do gradiente (topo direito)
          style={styles.header}
        >

          <View style={styles.logoContainer}>
            <Image
              source={require('./assets/aberto-branco.png')}
              style={styles.logo}
            />

          </View>
          <Text style={styles.siteNome}>TravelDiary</Text>
        </LinearGradient>

        {/* imagem de fundo */}
        <ImageBackground
          style={styles.image}
          source={require('./assets/angra.png')}
        >
          <View style={styles.setinha}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </View>
          <Text style={styles.titulo}>Primeira Viagem</Text>
        </ImageBackground>

        <View style={styles.cardContainer}>

          <View style={styles.contentContainer}>

            <Text style={styles.lugar}>Angra dos Reis, Rio de Janeiro</Text>
            <Text style={styles.data}>28/06</Text>
            <Text style={styles.roteiro}>Roteiro de viagem</Text>
            <Text style={styles.description}>
              Ao chegar em Angra dos Reis, fui imediatamente envolvido pela paisagem.
            </Text>
            <Text style={styles.description}>
              As águas turquesa e as ilhas ao longe me deram a sensação de estar em um paraíso escondido.
            </Text>
            <Text style={styles.description}>
              O cheiro de maresia no ar me fez sentir que estava prestes a viver algo especial.
            </Text>
            <View style={styles.line}></View>
            <View style={styles.tagsContainer}>
              <Text style={styles.tag}>#PasseiodeBarco</Text>
              <Text style={styles.tag}>#ComiMuito</Text>
              <Text style={styles.tag}>#Comprinhas</Text>
            </View>
            <View style={styles.button}>
              <TouchableOpacity style={styles.deleteButton}>
                <Text style={styles.deleteText}>Deletar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.editButton}>
                <LinearGradient
                  colors={['#3F0D70', '#C47CFD']}
                  start={{ x: 0, y: 1 }}  // Início do gradiente (topo esquerdo)
                  end={{ x: 1, y: 0 }}
                  style={styles.gradientButton}  // estilo separado para o gradiente
                >
                  <Text style={styles.editText}>Editar</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <StatusBar style="light" />

      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE0F2',
  },
  header: {
    width: '100%',
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  siteNome: {
    position: 'absolute',
    top: 21,
    left: 70, //deixa o titulo no lugar certinho, o de cima tmb
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
  cardContainer: {
    position: 'absolute',
    top: 275, // Ajuste a altura conforme a imagem
    alignSelf: 'center',
    width: 442,
    height: 300,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#fff',
    padding: 20,
    zIndex: 2, // Garante que fique acima da imagem
  },
  image: {
    width: '100%',
    height: 220,
    justifyContent: 'flex-end',
    paddingBottom: 0,
  },
  setinha: {
    position: 'absolute',
    top: 40,
  },
  titulo: {
    color: 'white',
    fontSize: 25,
    padding: 20,
    fontWeight: 'bold',
  },
  roteiro: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8149A4',
    marginBottom: 10,
    marginTop: 10,
  },
  lugar: {
    fontSize: 20,
    fontWeight: 500,
    color: '#000',
  },
  data: {
    color: '#D8D8D8',
    fontSize: 16,
    position: 'absolute',
    top: 4,
    left: 340,
  },
  description: {
    fontSize: 24,
    marginBottom: 10,
    lineHeight: 22,
    fontWeight: 400,
    padding: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 2, // opcional: espaçamento entre tags 
    marginTop: 10,
    justifyContent: 'flex-start',
    position: 'absolute',
    top: 450,
    left: 50,

  },
  line: {
    width: '100%',
    height: 1,
    position: 'absolute',
    top: 200,
    backgroundColor: '#000000', // cor da linha
    marginTop: 200,
  },
  tag: {
    backgroundColor: '#E8CFF6',
    color: '#fff',
    borderRadius: 15,
    width: 150,
    height: 40,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginRight: 8,
    marginBottom: 8,
    fontSize: 16,

  },
  button: {
    flexDirection: 'row',
    marginTop: 320, // Ajuste o espaço entre os botões e o conteúdo anterior
    paddingHorizontal: 20,
    width: '100%', // ocupa toda a largura disponível
    justifyContent: 'space-between',
    marginBottom: 20, // espaço no final
  },
  
  deleteButton: {
    width: 150, // Definindo a largura fixa para o botão de deletar
    height: 50, // Definindo a altura fixa para o botão de deletar
    borderColor: '#8A4FFF',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  deleteText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 22,
  },
  
  editButton: {
    width: 150, // Definindo a largura fixa para o botão de editar
    height: 50, // Definindo a altura fixa para o botão de editar
    borderRadius: 8,
    overflow: 'hidden',
    zIndex: 10, // garante que o botão fique acima de outros elementos
  },
  
  gradientButton: {
    width: '100%', // Garante que o botão ocupe toda a largura do contêiner
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  editText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
})