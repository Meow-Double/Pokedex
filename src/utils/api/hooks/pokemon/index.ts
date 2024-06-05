import { useQueries } from '@tanstack/react-query';

import { requestPokemon } from '@utils/api/requests/';

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
