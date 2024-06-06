import { useRequestPokemonQueries } from '@utils/api/hooks/pokemon';
import styles from './Pokedex.module.css';
import { useState } from 'react';
import classnames from 'classnames';

export const PokedexPage = () => {
  const [selectedPokemonId, setSelectedPokemonId] = useState(1);
  const [offset, setOffset] = useState(6);

  const resuslts = useRequestPokemonQueries({ offset });

  const isLoading = resuslts.some((result) => result.isLoading);

  if (isLoading) return null;

  const pokemons = resuslts.map((result: any) => result.data.data);

  // const selectdePokemon = pokemons.find(pokemon => selectedPokemonId === pokemon.id)!;

  return (
    <div className={styles.page_container}>
      <div className={styles.content_container}>
        <div className={styles.card}>
          <div>title</div>
          <div>image</div>
          <div>statics</div>
        </div>
        <ul className={styles.list_container}>
          {pokemons.map((pokemon) => {
            const isActive = selectedPokemonId === pokemon.id;

            return (
              <li
                key={pokemon.id}
                role='option'
                aria-selected={isActive}
                className={classnames(styles.pokemon_item, {
                  [styles.active_pokemon_item]: isActive
                })}
                tabIndex={0}
                onKeyPress={(event) => {
                  if (event.key === 'Enter') setSelectedPokemonId(pokemon.id);
                }}
                onClick={() => setSelectedPokemonId(pokemon.id)}
              >
                <img
                  className={styles.pokemon_item_image}
                  src={pokemon.sprites.front_default ?? ''}
                  alt='pokemon'
                />
                {pokemon.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
