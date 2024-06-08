import { AxiosRequestConfig } from 'axios';
import { api } from '@utils/api/instance';

interface RequestStatParams {
  params: { id: number };
  config?: AxiosRequestConfig;
}
export const requestStat = ({ config, params }: RequestStatParams) =>
  api.get<PokemonStat>(`stat/${params.id}`, { ...config });
