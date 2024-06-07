import { requestPokemon } from 'utils/api/requests';

import { useQuery } from '@tanstack/react-query';


interface UseRequestPokemonQueryParams {
  id: number;
}

export const useRequestPokemonQuery = ({ id }: UseRequestPokemonQueryParams) =>
  useQuery<any>(['pokemons', id], () => requestPokemon({ params: { id } }));
