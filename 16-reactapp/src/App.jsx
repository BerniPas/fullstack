
// sintaxis para importar una imagen en react
import imagen from './logo.svg';

// importar el archivo css
import './css/App.css';

// importamos el componente de navegación
import Navegacion from './Componentes/Navegacion';
import Login from './Pages/Login';
import Nosotros from './Pages/Nosotros';
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
        <Route path="/"element={ <App /> } />
        <Route path="/login" element= { <Login />} />
        <Route path="/nosotros" element= { <Nosotros />} />
      </Routes>

      <div className="App">

        <header className="App-header">

          <img src={imagen} className="App-logo" alt="logo" />


          <p className='mt-5 text-danger'>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <a 
            className="App-link" 
            href="https://reactjs.org" 
            target="_blank" 
            rel="noopener noreferrer">
            Learn React
          </a>

        </header>

      </div>

    </React.Fragment>

  );

}


// exportar el componente App
export default App;
