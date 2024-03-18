import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import '@assets/css/global.css';

import { PockemonsPage } from './pages';


export const App = () =>(
  // const authState = useAuthState();

  // if (authState.isLoading) return null;


 
    <BrowserRouter>
    
        <Routes>
         <Route path="/" element={<PockemonsPage />}/>
        </Routes>
    </BrowserRouter>
  );

export default App;
