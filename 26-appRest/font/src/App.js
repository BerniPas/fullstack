
//import './css/App.css';
import Navegacion from './componentes/Navegacion';
import Home from './componentes/Home';
import Formulario from './componentes/Formulario';
import Usuarios from './componentes/Usuarios';
import Error from './componentes/Error';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (

    <>

      <Navegacion />

      <Routes>
        <Route path='/' element={ <Home /> }></Route>
        <Route path='/formulario' element={ <Formulario /> }></Route>
        <Route path='/usuarios' element={ <Usuarios /> }></Route>
        <Route path='*' element={ <Error /> }></Route>
      </Routes>
    
    </>


  );
}

export default App;
