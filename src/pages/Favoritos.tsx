import { Card } from '../components/Card';
import './Pages.css';
import { useFavorites } from '../context/FavoritesContext'; // 1. Importar o hook

export function FavoritosPage() {
  const { favoritos } = useFavorites(); // 2. Pegar a lista de favoritos do contexto

  return (
    <div className="page-container">
      <h1 className="page-title">Meus Favoritos</h1>
      {favoritos.length > 0 ? (
        <div className="grid-container">
          {/* 3. Mapear a lista de favoritos e renderizar um Card para cada um */}
          {favoritos.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      ) : (
        // 4. Mensagem para quando não houver favoritos
        <p>Você ainda não adicionou nenhum item aos favoritos.</p>
      )}
    </div>
  );
}