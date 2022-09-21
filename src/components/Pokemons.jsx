import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Pokemon from './Pokemon';

const Pokemons = () => {
  const [pages, setPages] = useState(0);

  const fetchPokemons = async ({ queryKey }) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${queryKey[1]}&limit=20`
    );
    return response.json();
  };

  const { data, status, isPreviousData } = useQuery(
    ['pokemons', pages],
    fetchPokemons,
    {
      keepPreviousData: true,
    }
  );

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error!</div>;
  }

  return (
    <div className="container">
      <ul className="row list-unstyled">
        {data.results.map((pokemon) => (
          <Pokemon key={pokemon.name} pokemon={pokemon}></Pokemon>
        ))}
      </ul>
      <div className="text-center">
        <button
          type="button"
          className="btn btn-primary m-2"
          disabled={data.previous === null}
          onClick={() =>
            setPages((prev) => (prev - 20 < 0 ? (prev = 0) : prev - 20))
          }
        >
          Previous
        </button>
        <button
          type="button"
          className="btn btn-primary m-2"
          disabled={isPreviousData && data.next === null}
          onClick={() => setPages((prev) => prev + 20)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pokemons;
