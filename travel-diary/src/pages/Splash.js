
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => navigation.navigate('Inicial'), 2000);
  }, []);

  return (
    <LinearGradient colors={['#A259FF', '#7B2CBF']} style={styles.container}>
      <Text style={styles.logo}>📖 Travel Diary</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  logo: { fontSize: 32, color: '#fff', fontWeight: 'bold' },
});
