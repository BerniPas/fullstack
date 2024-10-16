import { useEffect, useState } from "react";

const Carrito = () => {

    const [misCompras, setMisCompras] = useState({});

    useEffect(() => {
        const producto = localStorage.getItem('producto');
        if(producto) {
            setMisCompras(JSON.parse(producto));                
        }}, []);
        


    return(
        <>
            <h1>Carrito</h1>

            <div className="container text-center">
                <h2>
                    Los Productos que has comprado son:
                </h2>

                <button type="button">
                    Buscar
                </button>

                <h2>
                    {misCompras}
                </h2>

            </div>
        </>
    );
}


export default Carrito;