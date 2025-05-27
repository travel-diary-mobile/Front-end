
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Rodape({ onNovoDiario, onFavoritos }) {
  return (
    <View style={styles.rodape}>
      <TouchableOpacity onPress={onFavoritos} style={styles.botao}>
        <Icon name="heart-outline" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onNovoDiario} style={styles.botaoNovo}>
        <Text style={styles.textoNovo}>Novo Diário</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#7B2CBF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  botao: { padding: 10 },
  botaoNovo: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  textoNovo: { color: '#7B2CBF', fontWeight: 'bold' },
});
