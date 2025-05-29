import React, { useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { DiarioContext } from '../context/DiarioContext';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

export default function Inicial({ navigation }) {
  const { diarios, favoritar } = useContext(DiarioContext);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Visualizar', { diario: item })}
    >
      {item.imagemBase64 ? (
        <Image
          source={{ uri: `data:image/png;base64,${item.imagemBase64}` }}
          style={styles.cardImage}
        />
      ) : (
        <View style={styles.imagePlaceholder} />
      )}
      <View style={styles.itemContent}>
        <Text style={styles.itemTitulo}>{item.titulo}</Text>
        <Text style={styles.itemDestino}>{item.destino}</Text>
      </View>
      <TouchableOpacity onPress={() => favoritar(item.id)}>
        <Ionicons
          name={item.favorito ? 'star' : 'star-outline'}
          size={24}
          color="#a881fc"
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#410E73" barStyle="light-content" />
      <LinearGradient
        colors={['#410E73', '#C47BFC']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/aberto-branco.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.siteNome}>TravelDiary</Text>
        </View>
      </LinearGradient>

      <FlatList
        data={diarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        style={styles.listContainer}
      />

      <View style={styles.floatingButtonContainer}>
        <View style={styles.botoes}>
          <TouchableOpacity style={styles.botaoFavorito} onPress={() => navigation.navigate('Favoritos')}>
            <Ionicons name="book-outline" size={28} color="#4B0082" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate('Adicionar')}
          >
            <LinearGradient
              colors={['#3F0D70', '#C47CFD']}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientAdd}
            >
              <Text style={styles.addText}>Novo Diario</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5eaff',
  },
  header: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  siteNome: {
    position: 'absolute',
    top: 28,
    right: 100,
    fontSize: 22,
    color: 'white',
    fontWeight: '300',
    fontStyle: 'italic',
  },
  logoContainer: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 70,
    position: 'absolute',
    top: 9,
    right: 210,
    resizeMode: 'contain',
  },
  listContainer: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 100,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
    justifyContent: 'space-between',
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 12,
    resizeMode: 'cover',
  },
  imagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 12,
    backgroundColor: '#ddd',
  },
  itemContent: {
    flex: 1,
  },
  itemTitulo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  itemDestino: {
    fontSize: 14,
    color: '#999',
    marginTop: 4,
  },
  addText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  gradientAdd: {
    borderRadius: 8,
    paddingVertical: 13,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: 16,
  },
  botoes: {
    backgroundColor: '#f5eaff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 0,
    marginTop: 0,
    padding: 20,
    gap: 10,
  },
  botaoFavorito: {
    borderWidth: 2,
    borderColor: '#410E73',
    borderRadius: 16,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
    width: '40%',
    height: 60,
  },
  botao: {
    flex: 1,
  },
});
