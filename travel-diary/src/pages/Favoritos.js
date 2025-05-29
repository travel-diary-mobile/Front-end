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

export default function Favoritos({ navigation }) {
  const { diarios, favoritar } = useContext(DiarioContext);
  const favoritos = diarios.filter(d => d.favorito);

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

      <Text style={styles.title}>Favoritos</Text>

      {favoritos.length === 0 ? (
        <Text style={styles.semFavoritos}>Nenhum diário favorito.</Text>
      ) : (
        <FlatList
          data={favoritos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
          style={styles.listContainer}
        />
      )}

      <View style={styles.areaVoltar}>
        <View style={styles.fundoRodape} />
        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => navigation.navigate('Inicial')}
        >
          <Image
            source={require('../../assets/Inicial.png')}
            style={styles.iconeVoltar}
          />
        </TouchableOpacity>
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
    marginLeft: 40,
  },
  logo: {
    width: 60,
    height: 70,
    position: 'absolute',
    top: 9,
    right: 210,
  },
  title: {
    fontSize: 28,
    color: '#7B2CBF',
    fontWeight: '600',
    marginBottom: 20,
    marginTop: 10,
    marginLeft: "5%",
  },
  semFavoritos: {
    fontSize: 16,
    color: '#999',
    marginLeft: "5%",
  },
  listContainer: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 16,
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

  areaVoltar: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: 80,
  alignItems: 'center',
  justifyContent: 'center',
},

fundoRodape: {
  position: 'absolute',
  bottom: 0,
  height: 80,
  width: '100%',
  backgroundColor: '#fff',
  borderTopWidth: 1,
  borderTopColor: '#ccc',
},

botaoVoltar: {
  width: 60,
  height: 60,
  borderRadius: 30,
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 10,
  elevation: 4,
},

iconeVoltar: {
  width: 62,
  height: 62,
  resizeMode: 'contain',
},


});
