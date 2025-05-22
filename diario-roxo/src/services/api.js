import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';

const api = axios.create({
  baseURL: 'https://traveldiary.azurewebsites.net/diarioviagens',
});

export async function buscarDiarios() {
  const response = await api.get('/');
  const parser = new XMLParser();
  const json = parser.parse(response.data);
  const lista = Array.isArray(json.List.item) ? json.List.item : [json.List.item];
  return lista.map(item => ({ ...item, favorito: false }));
}

export async function buscarDiarioPorId(id) {
  const response = await api.get(`/${id}`);
  const parser = new XMLParser();
  const json = parser.parse(response.data);
  return { ...json.item, favorito: false };
}

export async function adicionarDiario(diario) {
  return api.post('/', diario);
}

export async function editarDiario(id, diario) {
  return api.put(`/${id}`, diario);
}

export async function deletarDiario(id) {
  return api.delete(`/${id}`);
}
