import { AxiosRequestConfig } from 'axios';
import { api } from '@utils/api/instance';

interface RequestPokemonFormParams {
  params: { id: number };
  config?: AxiosRequestConfig;
}
export const requestPokemonForm = ({ config, params }: RequestPokemonFormParams) =>
  api.get<PokemonStat>(`pokemo-form/${params.id}`, { ...config });
