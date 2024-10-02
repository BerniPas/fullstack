
// sintaxis para importar una imagen en react
// import imagen from './logo.svg';

// importar el archivo css
import './css/App.css';

// importamos el componente de navegación
import Navegacion from './Componentes/Navegacion';
import Login from './Pages/Login';
import Nosotros from './Pages/Nosotros';
import Home from './Pages/Home';
import React from 'react';
import { Routes, Route } from 'react-router-dom';


// primer componente de react - El componente Principal
// componente funcional = el componente es una función
const App = () => {

  return ( 
    
    // JSX = JavaScript XML
    // En los atributos de las etiquetas HTML para estilos usas camelCase

    <React.Fragment>

      <Navegacion />

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element= { <Login />} />
        <Route path="/nosotros" element= { <Nosotros />} />
      </Routes>

    </React.Fragment>

  );

}


// exportar el componente App
export default App;
