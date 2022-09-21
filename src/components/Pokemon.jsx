import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { firstLetterUpper } from '../helper/helperMethods';

const Pokemon = ({ pokemon }) => {
  const fetchSinglePokemon = async () => {
    const response = await fetch(pokemon.url);
    return response.json();
  };

  const queryKey = `pokemon${pokemon.url.slice(-5, -1)}`;

  const { data, status } = useQuery(queryKey, fetchSinglePokemon);

  if (status === 'loading') {
    return <li>Loading...</li>;
  }

  if (status === 'error') {
    return <li>Error!</li>;
  }

  return (
    <li className="col m-1" key={data.id + data.name}>
      <Link className="text-decoration-none fw-semibold" to={`${data.id}`}>
        <div className="card bg-info" style={{ width: '10rem' }}>
          <img
            src={data.sprites.other['official-artwork'].front_default}
            className="card-img-top"
            alt={data.name}
          />
          <div className="card-body">
            <p className="card-text text-center">#{data.id}</p>
            <p className="card-text text-center">
              {firstLetterUpper(data.name)}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
};
export default Pokemon;
