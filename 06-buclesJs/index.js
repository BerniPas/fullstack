
//bienvenida a la app
alert('Bienvenido a la carga de Datos');

//inicializamos el array de productos
let productos = [];

//gauardamos el producto del cliente en una variable
let producto = prompt('Ingresa el nombre del producto');

//guardamos el producto en el array
productos.push(producto);

//imprimimos los productos que el cliente ingresa a la aplicación
for (let index = 0; index < productos.length; index++) {
    console.log(productos[index]);
}



