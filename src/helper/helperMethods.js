const API_BASE_URL = 'https://pokeapi.co/api/v2/';

export const firstLetterUpper = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const fetchPokemons = async ({ queryKey }) => {
  const response = await fetch(
    `${API_BASE_URL}pokemon/?offset=${queryKey[1]}&limit=20`
  );
  return response.json();
};

export const fetchSinglePokemon = async (POKEMON_URL) => {
  if (POKEMON_URL.startsWith(API_BASE_URL)) {
    const responseA = await fetch(`${POKEMON_URL}`);
    return responseA.json();
  }
  const response = await fetch(`${API_BASE_URL}${POKEMON_URL}`);
  return response.json();
};
