import React from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

const Header = ({ title, iconSource }) => {
  return (
    <LinearGradient
      colors={['#410E73', '#C47BFC']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <View style={styles.leftSection}>
        <Image source={iconSource} style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </LinearGradient>
  );
};

export default Header;
