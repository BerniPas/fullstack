import imagenUno from '../image/img1.jpg';
import imagenDos from '../image/img2.jpg';
import imagenTres from '../image/img3.jpg';



const Home = () => {

    return(

    <>
        <div class="carrusel">
            <div class="carrusel-contenido">
                <div class="carrusel-slide">
                    <img src={imagenUno} alt="Imagen 1" />
                </div>
                <div class="carrusel-slide">
                    <img src={imagenDos} alt="Imagen 2" />
                </div>
                <div class="carrusel-slide">
                    <img src={imagenTres} alt="Imagen 3" />
                </div>
            </div>
            <button class="carrusel-prev">&#10094;</button>
            <button class="carrusel-next">&#10095;</button>
        </div>

        <section>
            <h1 class="tituloCentral">MEGAFIT</h1>
        </section>
    </>
    )
}

export default Home;