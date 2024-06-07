import { useState } from 'react';

import {} from '@utils/api/hooks';
import { useRequestPokemonQueries } from '@utils/api/hooks/pokemon';

import { Pokemon } from './Pokemon/Pokemon';

export const PokemonsPage = () => {
  const [offset, setOffset] = useState(20);

  const resuslts = useRequestPokemonQueries({ offset });

  const isLoading = resuslts.some((result) => result.isLoading);

  if (isLoading) return null;

  const pokemons = resuslts.map((result: any) => result.data.data);

  return (
    <div className='container'>
      <button onClick={() => setOffset((prev) => prev + 20)}>more pokemons</button>
      <div className='grid grid-cols-4 gap-10'>
        {pokemons.map((pokemon, index: any) => (
          <Pokemon pokemon={pokemon} key={index} />
        ))}
      </div>
    </div>
  );
};
