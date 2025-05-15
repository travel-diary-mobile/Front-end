import api from './api';

export const criarDiarioViagem = async (viagem) => {
  const response = await api.post('/diarioviagens', viagem);
  return response.data;
};
