import { Routes, Route } from 'react-router-dom';

// Importando o componente de navegação
import { Navbar } from './components/Navbar';

// Importando todas as páginas da aplicação
import { AnimaisPage } from './pages/Animais';
import { LivrosPage } from './pages/Livros';
import { PessoasPage } from './pages/Pessoas';
import { FavoritosPage } from './pages/Favoritos';

function App() {
  return (
    // O Fragment `<>` é usado para agrupar a Navbar e o conteúdo principal
    <>
      <Navbar />
      <main>
        {/* O componente <Routes> gerencia a troca de páginas */}
        <Routes>
          {/* A prop "index" marca esta como a rota padrão para o caminho "/" */}
          <Route index element={<AnimaisPage />} />

          {/* Rotas para cada página específica */}
          <Route path="/animais" element={<AnimaisPage />} />
          <Route path="/livros" element={<LivrosPage />} />
          <Route path="/pessoas" element={<PessoasPage />} />
          <Route path="/favoritos" element={<FavoritosPage />} />

          {/* Uma rota "catch-all" para qualquer URL não encontrada */}
          <Route path="*" element={<h1>404 - Página Não Encontrada</h1>} />
        </Routes>
      </main>
    </>
  );
}

export default App;