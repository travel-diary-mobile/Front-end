import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, Image, StyleSheet, View, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import Body from './src/Body/Body';
import api from './src/Service/api';  
export default function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  // Buscar dados da API
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('r-api/?api=diarios');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <LinearGradient
        colors={['#C47CFD', '#451278']}
        style={styles.container}
      >
        <ActivityIndicator size="large" color="white" />
      </LinearGradient>
    );
  }

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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  icon: {
    width: 300,
    height: 250,
    position: 'absolute',
    top: 270,
    marginBottom: 20,
  },
  title: {
    position: 'absolute',
    bottom: 220,
    fontSize: 50,
    color: 'white',
    fontWeight: '300',
    fontStyle: 'italic',
    marginBottom: 150,
  },
  button: {
    position: 'absolute',
    bottom: 35,
    borderWidth: 2,
    borderColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 140,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 26,
  },
});
