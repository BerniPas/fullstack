import logo from '../image/logo.png';
import instagram from '../image/ig.png';
import facebook from '../image/fb..png';
import tiktok from '../image/Tiktok.png';



const Footer = () => {

    return(

    <footer>
        <div class="logoDos">
            <a href="index.html">
                <img src={logo} alt="logo" />
            </a>
        </div> 
        <div class="datos">
            <h4>Dirección: Av. Brasil 2025 <br />
                Tel. 29367808 <br />
                Whatsapp: 096536789
            </h4>
        </div>
        <hr />
        <h5>Redes Sociales</h5>
        <div class="redes">
            <img src={instagram} alt="Instagram" />
            <img src={facebook} alt="Facebook" />
            <img src={tiktok} alt="TikTok" />
        </div>
        <hr />
        <div class="textoFinal">
            <p>Derechos reservados MEGAFIT</p>
        </div>
    </footer>
    )
}

export default Footer;