import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Fundo from './src/componentes/Fundo/Fundo';

export default function App() {
  const [pronto, setPronto] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPronto(true);
    }, 3000); // 3 segundos de carregamento

    return () => clearTimeout(timer);
  }, []);

  if (!pronto) {
    // Segunda tela de carregamento (logo após a splash nativa do Expo)
    return (
      <LinearGradient
        colors={['#C47CFD', '#451278']}
        style={styles.container}
      >
        <Image
          source={require('./assets/aviao-branco.png')}
          style={styles.icon}
        />
        <StatusBar style="light" />
      </LinearGradient>
    );
  }
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

