import { AxiosRequestConfig } from 'axios';
import { api } from '@utils/api/instance';

interface RequestPokemonParams {
  params: { id: number };
  config?: AxiosRequestConfig;
}
export const requestPokemon = ({ config, params }: RequestPokemonParams) => {
  return api.get(`pokemon/${params.id}`, { ...config, params });
};
