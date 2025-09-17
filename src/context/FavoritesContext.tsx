import { createContext, useState, useContext, type ReactNode } from 'react';
import type { DataItem } from '../types/data';

interface FavoritesContextType {
  favoritos: DataItem[];
  addFavorito: (item: DataItem) => void;
  removeFavorito: (item: DataItem) => void;
  isFavorito: (itemId: string) => boolean;
}

export const FavoritesContext = createContext<FavoritesContextType | null>(null);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoritos, setFavoritos] = useState<DataItem[]>([]);

  const addFavorito = (item: DataItem) => {
    if (!favoritos.some(fav => fav.id === item.id)) {
      setFavoritos((prevFavoritos) => [...prevFavoritos, item]);
    }
  };

  const removeFavorito = (item: DataItem) => {
    setFavoritos((prevFavoritos) => prevFavoritos.filter((fav) => fav.id !== item.id));
  };

  const isFavorito = (itemId: string) => {
    return favoritos.some((fav) => fav.id === itemId);
  };

  return (
    <FavoritesContext.Provider value={{ favoritos, addFavorito, removeFavorito, isFavorito }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites deve ser usado dentro de um FavoritesProvider');
  }
  return context;
}