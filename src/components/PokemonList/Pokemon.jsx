import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import {
  fetchSinglePokemon,
  firstLetterUpper,
} from '../../helper/helperMethods';
import { typeColor, colors } from '../../helper/pokemonColors';
import Loader from '../Loader/Loader';

const Pokemon = ({ pokemon }) => {
  const queryKey = `pokemon${pokemon.url.slice(-5, -1)}`;

  const { data, status } = useQuery(queryKey, () =>
    fetchSinglePokemon(pokemon.url)
  );

  if (status === 'loading') {
    return (
      <li>
        <Loader />
      </li>
    );
  }

  if (status === 'error') {
    return <li>Error!</li>;
  }

  const pokemonColor = typeColor(data.types[0].type.name, colors);

  return (
    <li className="col m-1" key={data.id + data.name}>
      <Link className="text-decoration-none fw-semibold" to={`${data.id}`}>
        <div
          className="card"
          style={{
            width: '210px',
            height: '290px',
            backgroundColor: `${pokemonColor}`,
          }}
        >
          {status === 'success' ? (
            <img
              src={data.sprites.other['official-artwork'].front_default}
              className="card-img-top"
              alt={data.name}
              style={{ width: '12rem', heigth: '12rem' }}
            />
          ) : (
            <Loader />
          )}
          <div className="card-body">
            <p className="card-text text-center text-light">#{data.id}</p>
            <p className="card-text text-center text-light">
              {firstLetterUpper(data.name)}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
};
export default Pokemon;
