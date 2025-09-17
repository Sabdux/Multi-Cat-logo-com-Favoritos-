import { Card } from '../components/Card';
import './Pages.css';
import dados from '../data/dados.json';

export function AnimaisPage() {
  const { animais } = dados;

  return (
    <div className="page-container">
      <h1 className="page-title">Animais</h1>
      <div className="grid-container">
        {animais.map((animal) => (
          <Card key={animal.id} item={animal} />
        ))}
      </div>
    </div>
  );
}