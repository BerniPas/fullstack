import imagen from '../image/logo.png'
import { Link } from 'react-router-dom';

const Navegacion = () => {


    const buscar = () => {
        alert("Buscando...");
    }


    return(
        <>
            <header>
                <nav>
                    <div class="logo">
                        <Link to="/">
                            <img src={imagen} alt="logo" />
                        </Link>
                    </div>
                    <ul>
                        <li>
                            Clubes
                        </li>
                        <li>
                            <Link to="/ecommerce">
                                Ecommerce
                            </Link>
                        </li>
                        <li>
                            <Link to="/contacto">
                                Contacto
                            </Link>
                        </li>
                        <li>
                            Nosotros
                        </li>
                        <li>
                            <Link to="/alta">
                                Alta
                            </Link>
                        </li>
                        <li>
                            <Link to="/login">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link to="/carrito">
                            <i class="bi bi-cart-check-fill">
                                Carrito
                            </i>
                            </Link>
                        </li>
                    </ul>
                    <input class="buscar" type="search" id="search" name="search" />
                    <button onClick={buscar} class="boton">Buscar</button>
                </nav>
            </header>
        </>
    );
}


export default Navegacion;