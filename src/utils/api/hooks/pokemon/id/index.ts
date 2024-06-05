import { useQuery } from '@tanstack/react-query';

import { requestPokemon } from '@utils/api/requests';

interface UseRequestPokemonQueryParams {
  id: number;
}

export const useRequestPokemonQuery = ({ id }: UseRequestPokemonQueryParams) =>
  useQuery<any>(['pokemons', id], () => requestPokemon({ params: { id } }));
