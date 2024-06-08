import { requestStat } from '@utils/api/requests/stat/id';

import { useQuery } from '@tanstack/react-query';

interface UseRequestStatQueryParams {
  id: number;
}

export const useRequestStatQuery = ({ id }: UseRequestStatQueryParams) =>
  useQuery<any>(['stat', id], () => requestStat({ params: { id } }));
