import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { fetchSinglePokemon } from '../../helper/helperMethods';
import { typeColor, colors } from '../../helper/pokemonColors';
import Button from '../Button/Button';
import ImageBlock from './detailComponents/ImageBlock';
import SpecificsBlock from './detailComponents/SpecificsBlock';

const PokemonDetails = () => {
  const { pokemonId } = useParams();
  const POKEMON_URL = `pokemon/${pokemonId}/`;

  const { data, status } = useQuery(['pokemon', pokemonId], () =>
    fetchSinglePokemon(POKEMON_URL)
  );

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error!</div>;
  }

  const pokemonColor = typeColor(data.types[0].type.name, colors);

  return (
    <>
      <div
        className="container text-center p-2 border rounded-4 d-md-flex justify-content-md-around"
        style={{ maxWidth: '950px' }}
      >
        <ImageBlock
          pokemonColor={pokemonColor}
          pokemonName={data.name}
          imageSrc={data.sprites.other['official-artwork'].front_default}
        />
        <SpecificsBlock
          pokemonColor={pokemonColor}
          abilityArray={data.abilities}
          statsArray={data.stats}
          typesArray={data.types}
        />
      </div>
      <Link to="/">
        <div className="text-center">
          <Button type="button">Go Back</Button>
        </div>
      </Link>
    </>
  );
};
export default PokemonDetails;
