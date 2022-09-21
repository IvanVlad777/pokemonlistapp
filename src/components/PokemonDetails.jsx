import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { firstLetterUpper } from '../helper/helperMethods';

const PokemonDetails = () => {
  const { pokemonId } = useParams();
  const POKEMON_URL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;

  const fetchSinglePokemon = async () => {
    const response = await fetch(POKEMON_URL);
    return response.json();
  };

  const { data, status } = useQuery(['pokemon', pokemonId], fetchSinglePokemon);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error!</div>;
  }

  return (
    <div className="container text-center">
      <h2>{data.name.toUpperCase()}</h2>
      <img
        className="m-3"
        height={'250px'}
        src={data.sprites.other['official-artwork'].front_default}
        alt={data.name}
      />
      {data.abilities.map((ability) => (
        <p key={ability.ability.name}>
          {firstLetterUpper(ability.ability.name)}
        </p>
      ))}
      {data.types.map((type) => (
        <p key={type.type.name}>{firstLetterUpper(type.type.name)}</p>
      ))}
      <div>
        {data.stats.map((stat) => (
          <div key={stat.stat.name}>
            {firstLetterUpper(stat.stat.name)}: {stat.base_stat}
          </div>
        ))}
      </div>
    </div>
  );
};
export default PokemonDetails;
