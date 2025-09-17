export interface Animal {
  id: string;
  nome: string;
  especie: string;
  imagem: string;
}

// Define a estrutura de um Livro
export interface Livro {
  id: string;
  titulo: string;
  autor: string;
  ano: number;
  capa: string;
}

// Define a estrutura de uma Pessoa
export interface Pessoa {
  id: string;
  nome: string;
  nascimento: string;
  area: string;
  foto: string;
}

// Cria um tipo de união para representar qualquer um dos itens de dados
export type DataItem = Animal | Livro | Pessoa;