import {AxiosRequestConfig} from 'axios';
import { api } from 'utils/api/instance';

export const requestPokemon = ({config?: AxiosRequestConfig}) => {
  return api.get('pokemon', config);
};
