import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route, Link } from 'react-router-dom';
import PokemonDetails from './components/PokemonDetails';
import Pokemons from './components/Pokemons';

const queryClient = new QueryClient();

const App = () => {
  return (
    <div>
      <h1 className="text-center">Pokemon List</h1>

      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Pokemons />}></Route>
          <Route path="/:pokemonId" element={<PokemonDetails />}></Route>
        </Routes>
      </QueryClientProvider>
    </div>
  );
};

export default App;
