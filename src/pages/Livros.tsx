import { Card } from '../components/Card';
import './Pages.css';
import dados from '../data/dados.json';

export function LivrosPage() {
  const { livros } = dados;

  return (
    <div className="page-container">
      <h1 className="page-title">Livros</h1>
      <div className="grid-container">
        {livros.map((livro) => (
          <Card key={livro.id} item={livro} />
        ))}
      </div>
    </div>
  );
}