import React, { useState } from 'react';
import { Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './style.js';

export default function Edicao() {
  const [destino, setDestino] = useState('Angra dos Reis, Rio de Janeiro');
  const [data, setData] = useState('');
  const [roteiro, setRoteiro] = useState(`Ao chegar em Angra dos Reis, fui imediatamente envolvido pela paisagem.

As águas turquesa e as ilhas ao longe me deram a sensação de estar em um paraíso escondido.

O cheiro de maresia no ar me fez sentir que estava prestes a viver algo especial.`);

  const atividades = ['#PasseioDeBarco', '#ComiMuito', '#Comprinhas'];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Primeira Viagem</Text>

      <TextInput
        style={styles.input}
        value={destino}
        onChangeText={setDestino}
        placeholder="Destino"
      />

      <Text style={styles.label}>Data:</Text>
      <TextInput
        style={styles.input}
        value={data}
        onChangeText={setData}
        placeholder="__/__/____"
      />

      <Text style={styles.label}>Roteiro de viagem</Text>
      <TextInput
        style={styles.textArea}
        value={roteiro}
        onChangeText={setRoteiro}
        multiline
      />

      <Text style={styles.label}>Atividades Realizadas</Text>
      <View style={styles.tagsContainer}>
        {atividades.map((tag, index) => (
          <Text key={index} style={styles.tag}>{tag}</Text>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
