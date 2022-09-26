import React from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../../helper/helperMethods';

import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import LoaderContainer from '../Loader/LoaderContainer';
import Pokemon from './Pokemon';

const Pokemons = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const inputHandler = (e) => {
    const value = e.target.value;
    dispatch({ type: 'search', value: parseInt(value) });
  };

  const nextHandler = () => {
    dispatch({ type: 'increment' });
  };

  const previousHandler = (count) => {
    const countOfPokemons = count;
    dispatch({ type: 'decrement', count: countOfPokemons });
  };

  const { data, status, isPreviousData } = useQuery(
    ['pokemons', counter],
    fetchPokemons,
    {
      keepPreviousData: true,
    }
  );

  if (status === 'loading') {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
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
        <Button
          typeBtn="button"
          disabledCond={data.previous === null}
          onClickEv={() => previousHandler(data.count)}
        >
          Previous
        </Button>
        <input
          type="text"
          onChange={inputHandler}
          placeholder={`Type number(count:${data.count})`}
        />
        <Button
          typeBtn="button"
          disabledCond={isPreviousData && data.next === null}
          onClickEv={nextHandler}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Pokemons;
