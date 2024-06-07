import { FC, useState } from 'react';

import { isError } from '@tanstack/react-query';
import { useRequestPokemonQuery } from '@utils/api/hooks';

import styles from "./Pokemon.module.css"

interface PokemonProps {
  pokemon: any;
}

export const Pokemon: FC<PokemonProps> = ({ pokemon }) => 
  // const [offset, setOffset] = useState(0);

  // const { data, isLoading, fetchNextPage, isError } = useRequestPokemonQuery({id});

  // if (!data || isError) return <div>Error</div>;
  // if (isLoading) return <div>loading</div>;

  // const pokemon = data.data

   (
    <div className={styles.pokemon_container}>
      <img className='w-full h-72' src={pokemon.sprites.front_default} alt='pokemon img' />
      <h2 className='w-full text-left text-2xl font-semibold capitalize'>{pokemon.name}</h2>
    </div>
  )
;
