import react from "react";
import {
    View, Text, Image, StyleSheet, ScrollView, StatusBar, } from 'react-native';

  export default function TravelDiaryEntry() {
      return (
        <LinearGradient
          colors={['#410E73', '#C47BFC']}
          start={{ x: 0, y: 1 }}  // Início do gradiente (topo esquerdo)
          end={{ x: 1, y: 0 }}    // Fim do gradiente (topo direito)
          style={styles.header}
        >

          <View style={styles.logoContainer}>
            <Image
              source={require('../../../assets/aberto-branco.png')}
              style={styles.logo}
            />

          </View>
          <Text style={styles.siteNome}>TravelDiary</Text>
          <StatusBar style="light" />
        </LinearGradient>
        

  );
}

