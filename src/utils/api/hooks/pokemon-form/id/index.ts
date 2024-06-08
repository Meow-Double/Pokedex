import { useQuery } from '@tanstack/react-query';
import { requestPokemonForm } from 'utils/api/requests/pokemon-form/id';

interface UseRequestPokemonFormQueryParams {
  id: number;
}

export const useRequestPokemonFormQuery = ({ id }: UseRequestPokemonFormQueryParams) =>
  useQuery<any>(['pokemon-form', id], () => requestPokemonForm({ params: { id } }));
