import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
    color: '#8e44ad',
    marginBottom: 5,
  },
  textArea: {
    height: 120,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    textAlignVertical: 'top',
    marginBottom: 15,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },
  tag: {
    backgroundColor: '#e1d5f3',
    color: '#8e44ad',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#8e44ad',
    marginRight: 10,
    alignItems: 'center',
  },
  confirmButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#8e44ad',
    alignItems: 'center',
  },
  cancelText: {
    color: '#8e44ad',
    fontWeight: 'bold',
  },
  confirmText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
