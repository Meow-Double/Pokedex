import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ROUTES } from './utils/constans/routes';
import { PokedexPage, PokemonsPage } from './pages';

import '@assets/css/global.css';


export const App = () => (
  // const authState = useAuthState();

  // if (authState.isLoading) return null;

  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.POKEMONS} element={<PokemonsPage />} />
      <Route path={ROUTES.POKEDEX} element={<PokedexPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
