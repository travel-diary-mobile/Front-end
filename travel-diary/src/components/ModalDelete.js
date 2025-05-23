
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

export default function ModalDelete({ isVisible, onConfirm, onCancel }) {
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.modal}>
        <Text style={styles.texto}>Realmente deseja excluir essa viagem?</Text>
        <View style={styles.botoes}>
          <TouchableOpacity onPress={onConfirm} style={styles.botaoSim}>
            <Text style={styles.textoBotao}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onCancel} style={styles.botaoNao}>
            <Text style={styles.textoBotao}>Não</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  texto: { marginBottom: 20, fontSize: 16 },
  botoes: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  botaoSim: { flex: 1, backgroundColor: '#7B2CBF', margin: 5, padding: 10, borderRadius: 5 },
  botaoNao: { flex: 1, backgroundColor: '#ccc', margin: 5, padding: 10, borderRadius: 5 },
  textoBotao: { color: '#fff', textAlign: 'center' },
});
