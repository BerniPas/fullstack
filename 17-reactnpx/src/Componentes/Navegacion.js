import imagen from '../image/logo.png'
import { Link } from 'react-router-dom';





const Navegacion = () => {
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
                            Ecommerce
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
                            Login
                        </li>
                    </ul>
                    <input class="buscar" type="search" id="search" name="search" />
                    <a href="www.educaionit.com" class="boton">Buscar</a>
                </nav>
            </header>
        </>
    );
}


export default Navegacion;