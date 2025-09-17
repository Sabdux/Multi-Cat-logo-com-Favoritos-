import { Card } from '../components/Card';
import './Pages.css';
import dados from '../data/dados.json';

export function PessoasPage() {
  const { pessoas } = dados;

  return (
    <div className="page-container">
      <h1 className="page-title">Pessoas Notáveis</h1>
      <div className="grid-container">
        {pessoas.map((pessoa) => (
          <Card key={pessoa.id} item={pessoa} />
        ))}
      </div>
    </div>
  );
}