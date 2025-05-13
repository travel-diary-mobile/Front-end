import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, View, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      colors={['#C47CFD', '#451278']} //gradiente do fundo
      style={styles.container}
    >
      <Image
        source={require('./assets/aviao-branco.png')} //icon do aviao
        style={styles.icon}
      />

       <StatusBar style="light" />  {/*controla a cor da statusbar */}
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
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 330, //deixa o icon no lugar certinho
    marginBottom: 20,
  },
});

