import imag1 from '../image/enargy.webp';
import imag2 from '../image/enargy.webp';

const Ecommerce = () => {    
    
    
    const carrito = () => {

        alert("Producto agregado al carrito");
        
        const articulo = {
            nombre: 'Enargy gel',
            precio: 2500,
            descripcion: 'Ideal para todo trabajo aeróbico. - Con sales de rehidratación.'
        }

        localStorage.setItem('producto', JSON.stringify(articulo));
        /* setProducto(articulo); */
 

        //localStorage.setItem('producto', 'Enargy gel');
    }


    return(
        <main class="seccionCards">
        <h2 class="tituloEcommerce">SUPLEMENTOS</h2>
        <section class="fila">
            <div class="card">
                <img src={imag1} alt="Enargy" />
                <div class="cardContenido">
                    <h3 class="cardTitulo">Enargy gel $2500</h3>
                    <p class="cardDescripcion">Ideal para todo trabajo aeróbico. - Con sales de rehidratación.</p>
                    <a href="#" class="boton">Leer más</a>
                    <button onClick={carrito} class="comprar">Agregar al carrito</button>
            </div>
            </div>
            <div class="card">
                <img src={imag2} alt="Complex" />
                <div class="cardContenido">
                    <h3 class="cardTitulo">Colageno Complex $4000</h3>
                    <p class="cardDescripcion">Complex ayuda a mantener en perfectas condiciones huesos y cartílagos.</p>
                    <a href="#" class="boton">Leer más</a>
                    <a href="#" class="comprar">Agregar al carrito</a>
            </div>
            </div>
            <div class="card">
                <img src={imag1} alt="whey" />
                <div class="cardContenido">
                    <h3 class="cardTitulo">Whey Protein $3500</h3>
                    <p class="cardDescripcion">Proteína de elevada calidad y es muy bien utilizada por el cuerpo.</p>
                    <a href="#" class="boton">Leer más</a>
                    <a href="#" class="comprar">Agregar al carrito</a>
            </div>
            </div>
        </section>
        <h2 class="tituloEcommerce">INDUMENTARIA</h2>
        <section class="fila"> 
            <div class="card">
            <img src={imag2} alt="Remera" />
            <div class="cardContenido">
                <h3 class="cardTitulo">Remera adidas $1500</h3>
                <p class="cardDescripcion">Remera para dama.</p>
                <a href="#" class="boton">Leer más</a>
                <a href="#" class="comprar">Agregar al carrito</a>
        </div>
        </div>
        <div class="card">
            <img src={imag1} alt="Zapatillas" />
            <div class="cardContenido">
                <h3 class="cardTitulo">Zzapatillas under armour $5500</h3>
                <p class="cardDescripcion">Zapatillas deportivas.</p>
                <a href="#" class="boton">Leer más</a>
                <a href="#" class="comprar">Agregar al carrito</a>
        </div>
        </div>
        <div class="card">
            <img src={imag2} alt="Remera" />
            <div class="cardContenido">
                <h3 class="cardTitulo">Remera adidas $1800</h3>
                <p class="cardDescripcion">Remera deportiva para hombre.</p>
                <a href="#" class="boton">Leer más</a>
                <a href="#" class="comprar">Agregar al carrito</a>
        </div>
        </div>
    </section>
    </main>
    );
}


export default Ecommerce;