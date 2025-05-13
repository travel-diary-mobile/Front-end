import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (
    <LinearGradient
      colors={['#C47CFD', '#451278']}
      style={styles.container}
    >
      <Text style={styles.title}>Travel Diary</Text>

      <Image
        source={require('./assets/aberto-branco.png')}
        style={styles.icon}
      />
      

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', //deixa os itens
    justifyContent: 'center', //deixa no centro
    padding: 20,
  },
  icon: {
    width: 300,
    height: 250,
    position: 'absolute',
    top: 270, //deixa o icon no lugar certinho
    marginBottom: 20,
  },
  title: {
    position: 'absolute',
    bottom: 220, //deixa o titulo no lugar certinho
    fontSize: 50,
    color: 'white',
    fontWeight: '300', //esse deixa light (mais fino)
    fontStyle: 'italic', //italic, ai os dois juntos são "light italic"
    marginBottom: 150,
  },
  button: {
    position: 'absolute',
    bottom: 35, //deixa o botao no lugar certinho
    borderWidth: 2,
    borderColor: 'white',
    paddingVertical: 16, // aumenta a altura
    paddingHorizontal: 140, //aumenta a largura dele
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 26,
  },
});
