import classnames from 'classnames';
import { useState } from 'react';
import { useRequestStatQuery } from 'utils/api/hooks';
import { useRequestPokemonQueries } from 'utils/api/hooks/pokemon';

import styles from './Pokedex.module.css';

export const PokedexPage = () => {
  const [selectedPokemonId, setSelectedPokemonId] = useState(1);
  const [offset, setOffset] = useState(6);

  const resuslts = useRequestPokemonQueries({ offset });

  const isLoading = resuslts.some((result) => result.isLoading);

  if (isLoading) return null;

  const pokemons = resuslts.map((result: any) => result.data.data);

  const selectedPokemon = pokemons.find((pokemon) => selectedPokemonId === pokemon.id)!;

  const statsPokemon = useRequestStatQuery({ id: 1 });

  return (
    <div className={styles.page_container}>
      <div className={styles.content_container}>
        <div className={styles.card}>
          <div className={styles.card_title}>
            <div className={styles.card_title_name}>{selectedPokemon.name}</div>
            <div>#00{selectedPokemon.id}</div>
          </div>
          <div>
            <img src={selectedPokemon.sprites.front_default ?? ''} alt='' />
          </div>
          <div>
            <div>statics</div>
            <ul>
              {selectedPokemon.stats.map((stat) => (
                <li>
                  <div>{stat.stat.name}</div>
                  <div>{stat.stat.base_stat}</div>
                  <div />
                </li>
              ))}
            </ul>
          </div>
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
