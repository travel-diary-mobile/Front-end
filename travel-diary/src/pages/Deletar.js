import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Deletar() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deletar um Diário</Text>
      <Button title="Confirmar Exclusão" onPress={() => alert('Diário deletado!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#7B2CBF', marginBottom: 20 },
});
