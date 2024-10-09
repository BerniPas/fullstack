
import './App.css';
import Footer from './Componentes/Footer';
import Navegacion from './Componentes/Navegacion';
import Contacto from './Contacto/Contacto';
import Home from './Home/Home';    
import Alta from './Alta/Alta';
import { Routes, Route } from 'react-router-dom';
import Error from './Error/Error';

function App() {
  return (
    <>
      <Navegacion />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/alta' element={<Alta />} />
        <Route path='/*' element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
