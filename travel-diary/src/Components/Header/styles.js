import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 9,
    justifyContent: 'center',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 57,
    height: 31,
    resizeMode: 'contain',
  },
  title: {
    color: '#FFF',
    fontSize: 18,
    marginLeft: 10,
  },
});
