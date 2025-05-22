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
        source={require('../../assets/aberto-branco.png')}
        style={styles.icon}
      />
      

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </LinearGradient>
  );
}
