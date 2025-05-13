import React from 'react';
import { View, Alert } from 'react-native';
import Header from './src/Components/Header';
import Logo from './assets/img/svg/logo.svg';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Header
        title="Travel Diary"
        iconSource={Logo}
        onPressIcon={() => Alert.alert('Você clicou no ícone!')}
      />
      {/* Conteúdo da tela */}
    </View>
  );
}
