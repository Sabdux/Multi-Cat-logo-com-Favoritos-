import { Link } from 'react-router-dom';
import './Navbar.css';

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Catálogo TS
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/animais" className="nav-link">
              Animais
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/livros" className="nav-link">
              Livros
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pessoas" className="nav-link">
              Pessoas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/favoritos" className="nav-link nav-link-special">
              Favoritos ★
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}