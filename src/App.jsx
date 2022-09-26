import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import Pokemons from './components/PokemonList/Pokemons';
import MainStyles from './components/styled-components/MainStyles';

const queryClient = new QueryClient();

const App = () => {
  return (
    <MainStyles>
      <div>
        <h1 className="text-center display-2">Pokemon List</h1>

        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Pokemons />}></Route>
            <Route path="/:pokemonId" element={<PokemonDetails />}></Route>
          </Routes>
        </QueryClientProvider>
      </div>
    </MainStyles>
  );
};

export default App;
