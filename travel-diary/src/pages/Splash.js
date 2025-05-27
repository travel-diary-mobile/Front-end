
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => navigation.navigate('Inicial'), 2000);
  }, []);

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
          
    
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Inicial')}>
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
        top: 240,
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