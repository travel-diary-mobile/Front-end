import axios from 'axios';

const api = axios.create({
  baseURL: 'https://traveldiary.azurewebsites.net/diarioviagens'
});

export async function buscarDiarios() {
  try {
    const response = await api.get('');
    console.log('Resposta GET:', response.data);

    const lista = Array.isArray(response.data) ? response.data : [response.data];
    return lista.map(item => ({
      id: item.id,
      titulo: item.titulo,
      descricao: item.descricao,
      destino: item.destino,
      dataViagem: item.dataViagem,
      imagemBase64: item.imagemBase64,
      favorito: false
    }));
  } catch (error) {
    console.error('Erro ao buscar diários:', error);
    return [];
  }
}

export async function buscarDiarioPorId(id) {
  try {
    const response = await api.get(`/${id}`);
    console.log('Resposta GET ID:', response.data);

    const item = response.data;
    return {
      id: item.id,
      titulo: item.titulo,
      descricao: item.descricao,
      destino: item.destino,
      dataViagem: item.dataViagem,
      imagemBase64: item.imagemBase64,
      favorito: false
    };
  } catch (error) {
    console.error('Erro ao buscar diário por ID:', error);
    return null;
  }
}

export async function adicionarDiario(diario) {
  try {
    const response = await api.post('', diario, {
      headers: { 'Content-Type': 'application/json' }
    });
    console.log('Resposta POST:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar diário:', error);
    throw error;
  }
}

export async function editarDiario(id, diario) {
  try {
    const response = await api.put(`/${id}`, diario, {
      headers: { 'Content-Type': 'application/json' }
    });
    console.log('Resposta PUT:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao editar diário:', error);
    throw error;
  }
}

export async function deletarDiario(id) {
  try {
    await api.delete(`/${id}`);
    console.log('Diário deletado:', id);
  } catch (error) {
    console.error('Erro ao deletar diário:', error);
    throw error;
  }
}
