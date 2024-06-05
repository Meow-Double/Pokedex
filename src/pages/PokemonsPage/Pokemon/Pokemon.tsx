import { FC, useState } from 'react';
import { useRequestPokemonQuery } from '@utils/api/hooks';
import { isError } from '@tanstack/react-query';

interface PokemonProps {
  pokemon: any;
}

export const Pokemon: FC<PokemonProps> = ({ pokemon }) => {
  // const [offset, setOffset] = useState(0);

  // const { data, isLoading, fetchNextPage, isError } = useRequestPokemonQuery({id});

  // if (!data || isError) return <div>Error</div>;
  // if (isLoading) return <div>loading</div>;

  // const pokemon = data.data

  return (
    <div className='padding flex justify-center flex-col rounded p-10 shadow w-96'>
      <img className='w-full h-72' src={pokemon.sprites.front_default} alt='pokemon img' />
      <h2 className='w-full text-left text-2xl font-semibold capitalize'>{pokemon.name}</h2>
    </div>
  );
};
