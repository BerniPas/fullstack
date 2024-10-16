
import './App.css';
import Footer from './Componentes/Footer';
import Navegacion from './Componentes/Navegacion';
import Contacto from './Contacto/Contacto';
import Home from './Home/Home';    
import Alta from './Alta/Alta';
import { Routes, Route } from 'react-router-dom';
import Error from './Error/Error';
import Login from './Login/Login';
import Admin from './Admin/Admin';
import Ecommerce from './Ecommerce/Ecommerce';
import Carrito from './Carrito/Carrito';

function App() {
  return (
    <>
      <Navegacion />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ecommerce' element={<Ecommerce />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/alta' element={<Alta />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/carrito' element={<Carrito />} />
        <Route path='/*' element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
