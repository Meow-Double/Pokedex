import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import '@assets/css/global.css';

import { PokedexPage, PokemonsPage } from './pages';
import { ROUTES } from './utils/constans/routes';


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
