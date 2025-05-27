import React, { createContext, useState, useEffect } from 'react';
import * as api from '../services/api';

export const DiarioContext = createContext();

export function DiarioProvider({ children }) {
  const [diarios, setDiarios] = useState([]);

  const carregarDiarios = async () => {
    try {
      const response = await api.buscarDiarios();
      const lista = response.map(item => ({
        ...item,
        favorito: false,
      }));
      setDiarios(lista);
      console.log('Diários carregados:', lista);
    } catch (error) {
      console.log('Erro ao carregar diários:', error);
    }
  };

  useEffect(() => {
    carregarDiarios();
  }, []);

  const adicionar = async (titulo, descricao, destino, dataViagem, imagemBase64) => {
    const novoDiario = {
      titulo,
      descricao,
      destino,
      dataViagem,
      imagemBase64,
    };

    console.log('Diário enviado:', novoDiario);

    try {
      await api.adicionarDiario(novoDiario);
      carregarDiarios();
    } catch (error) {
      console.log('Erro ao adicionar diário:', error);
    }
  };

  const editar = async (id, titulo, descricao, destino, dataViagem, imagemBase64) => {
    const diarioAtualizado = {
      titulo,
      descricao,
      destino,
      dataViagem,
      imagemBase64,
    };

    console.log('Diário editado:', diarioAtualizado);

    try {
      await api.editarDiario(id, diarioAtualizado);
      carregarDiarios();
    } catch (error) {
      console.log('Erro ao editar diário:', error);
    }
  };

  const deletar = async (id) => {
    try {
      await api.deletarDiario(id);
      carregarDiarios();
    } catch (error) {
      console.log('Erro ao deletar diário:', error);
    }
  };

  const favoritar = (id) => {
    setDiarios(diarios.map(d => d.id === id ? { ...d, favorito: !d.favorito } : d));
  };

  return (
    <DiarioContext.Provider value={{ diarios, adicionar, editar, deletar, favoritar }}>
      {children}
    </DiarioContext.Provider>
  );
}
