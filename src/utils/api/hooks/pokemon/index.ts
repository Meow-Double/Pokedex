import { requestPokemon } from 'utils/api/requests/';

import { useQueries } from '@tanstack/react-query';

interface UseRequestPokemonQueriesParams {
  offset: number;
}

export const useRequestPokemonQueries = ({ offset }: UseRequestPokemonQueriesParams) =>
  useQueries<any>({
    queries: Array.from({ length: offset }).map((_el, index) => {
      const pokemonId = index + 1;

      return {
        queryKey: ['pokemon', pokemonId],
        queryFn: () => requestPokemon({ params: { id: pokemonId } })
      };
    })
  });
