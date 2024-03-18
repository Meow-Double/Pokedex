import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export const PockemonsPage = () => {
    const [offset, setOffset] = useState(0);
  const { data, isLoading } = useQuery<any>(['pockemon'], () =>
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0').then((res) => res.json())
  );

  if (isLoading) return <div>loading</div>;
  
  return <div>{data.name}</div>;
};
