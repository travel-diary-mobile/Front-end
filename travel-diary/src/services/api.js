import axios from 'axios';

const api = axios.create({
  baseURL: 'https://traveldiary.azurewebsites.net/diarioviagens',
});

export async function buscarDiarios() {
  try {
    const response = await api.get('');
    return response.data;
  } catch (error) {
    console.log('Erro ao buscar diários:', error);
    return [];
  }
}

export async function buscarDiarioPorId(id) {
  try {
    const response = await api.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.log('Erro ao buscar diário por ID:', error);
    return null;
  }
}

export async function adicionarDiario(diario) {
  try {
    const response = await api.post('', diario, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.log('Erro ao adicionar diário:', error);
    throw error;
  }
}

export async function editarDiario(id, diario) {
  try {
    const response = await api.put(`/${id}`, diario, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.log('Erro ao editar diário:', error);
    throw error;
  }
}

export async function deletarDiario(id) {
  try {
    const response = await api.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.log('Erro ao deletar diário:', error);
    throw error;
  }
}
