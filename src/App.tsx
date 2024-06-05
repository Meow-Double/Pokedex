import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import '@assets/css/global.css';

import { PokemonsPage } from './pages';


export const App = () =>(
  // const authState = useAuthState();

  // if (authState.isLoading) return null;


 
    <BrowserRouter>
    
        <Routes>
         <Route path="/" element={<PokemonsPage />}/>
        </Routes>
    </BrowserRouter>
  );

export default App;
