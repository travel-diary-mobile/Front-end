import React, { createContext, useState, useEffect } from 'react';
import * as diarioService from '../services/api';

export const DiarioContext = createContext();

export function DiarioProvider({ children }) {
  const [diarios, setDiarios] = useState([]);

  useEffect(() => {
    carregarDiarios();
  }, []);

  const carregarDiarios = async () => {
    const lista = await diarioService.buscarDiarios();
    console.log('Diários carregados:', lista);
    setDiarios(lista);
  };

  const adicionar = async (titulo, descricao, destino, dataViagem, imagemBase64) => {
    await diarioService.adicionarDiario({ titulo, descricao, destino, dataViagem, imagemBase64 });
    carregarDiarios();
  };

  const editar = async (id, titulo, descricao, destino, dataViagem, imagemBase64) => {
    await diarioService.editarDiario(id, { titulo, descricao, destino, dataViagem, imagemBase64 });
    carregarDiarios();
  };

  const deletar = async (id) => {
    await diarioService.deletarDiario(id);
    setDiarios(diarios.filter(d => d.id !== id));
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
