import React from 'react';
import {
  View, Text, ImageBackground, StyleSheet, TouchableOpacity, ScrollView, StatusBar,


} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


export default function TravelDiaryEntry() {
    return (
  
      <ScrollView contentContainerStyle={{ paddingBottom: 800 }}>
        <View style={styles.container}>
  
          {/* imagem de fundo */}
          <ImageBackground
            style={styles.image}
            source={require('../../../assets/angra.png')}
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
  
  
 