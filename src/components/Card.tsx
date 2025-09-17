import './Card.css';
import { useFavorites } from '../context/FavoritesContext';
import type { DataItem } from '../types/data';

interface CardProps {
  item: DataItem;
}

const getCardContent = (item: DataItem) => {
  if ('especie' in item) { // É um Animal
    return {
      imagem: item.imagem,
      titulo: item.nome,
      texto1: `Espécie: ${item.especie}`,
      texto2: '',
    };
  }
  if ('autor' in item) { // É um Livro
    return {
      imagem: item.capa,
      titulo: item.titulo,
      texto1: `Autor: ${item.autor}`,
      texto2: `Ano: ${item.ano}`,
    };
  }
  if ('area' in item) { // É uma Pessoa
    return {
      imagem: item.foto,
      titulo: item.nome,
      texto1: `Área: ${item.area}`,
      texto2: `Nascimento: ${item.nascimento}`,
    };
  }
  return { imagem: '', titulo: 'Item Inválido', texto1: '', texto2: '' };
};

export function Card({ item }: CardProps) {
  const { addFavorito, removeFavorito, isFavorito } = useFavorites();
  const ehFavorito = isFavorito(item.id);

  const handleToggleFavorito = () => {
    if (ehFavorito) {
      removeFavorito(item);
    } else {
      addFavorito(item);
    }
  };

  const { imagem, titulo, texto1, texto2 } = getCardContent(item);

  return (
    <div className="card">
      <img src={imagem} alt={titulo} className="card-image" />
      <div className="card-body">
        <h3 className="card-title">{titulo}</h3>
        <p className="card-text">{texto1}</p>
        <p className="card-text">{texto2}</p>
      </div>
      <div className="card-footer">
        <button
          onClick={handleToggleFavorito}
          className={`favorite-btn ${ehFavorito ? 'favorited' : ''}`}
        >
          {ehFavorito ? '★ Remover Favorito' : '☆ Favoritar'}
        </button>
      </div>
    </div>
  );
}