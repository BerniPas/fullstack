


//Funciones del ejercicio de la Calculadora

const sumar = () => {

    //1. funcion parseINT : pasa un  dato de tipo string a tipo entero
    let numUno = parseInt(prompt("Ingrese el primer número: "));


    //verificamos los datos
    if (numUno == '' || isNaN(numUno) || numUno == null) {
        alert('Ingrese un número válido en el campo dado');
        return;
    }


    let numDos = parseInt(prompt("Ingrese el segundo número: "));

    if (numDos == '' || isNaN(numDos) || numDos == null) {
        alert('Ingrese un número válido en el campo dado');
        return;
    }

    let resultado = numUno + numDos;

    alert('El resultado de la suma es: ' + resultado);

}

const restar = () => {

    let numUno = parseInt(prompt("Ingrese el primer número: "));


    //verificamos los datos
    if (numUno == '' || isNaN(numUno) || numUno == null) {
        alert('Ingrese un número válido en el campo dado');
        return;
    }


    let numDos = parseInt(prompt("Ingrese el segundo número: "));

    if (numDos == '' || isNaN(numDos) || numDos == null) {
        alert('Ingrese un número válido en el campo dado');
        return;
    }

    let resultado = numUno - numDos;

    alert('El resultado de la suma es: ' + resultado);
}

const multiplicar = () => {

    let numUno = parseInt(prompt("Ingrese el primer número: "));


    //verificamos los datos
    if (numUno == '' || isNaN(numUno) || numUno == null) {
        alert('Ingrese un número válido en el campo dado');
        return;
    }


    let numDos = parseInt(prompt("Ingrese el segundo número: "));

    if (numDos == '' || isNaN(numDos) || numDos == null) {
        alert('Ingrese un número válido en el campo dado');
        return;
    }

    let resultado = numUno * numDos;

    alert('El resultado de la suma es: ' + resultado);
}

const dividir = () => {

    let numUno = parseInt(prompt("Ingrese el primer número: "));


    //verificamos los datos
    if (numUno == '' || isNaN(numUno) || numUno == null || numUno == 0) {
        alert('Ingrese un número válido en el campo dado');
        return;
    }


    let numDos = parseInt(prompt("Ingrese el segundo número: "));

    if (numDos == '' || isNaN(numDos) || numDos == null) {
        alert('Ingrese un número válido en el campo dado');
        return;
    }

    let resultado = numUno / numDos;

    alert('El resultado de la suma es: ' + resultado);
}


// Objeto Math para calculos avanazados
// Clase Math - Estática: no se puede instanciar
console.log(Math.PI);

console.log('=========================================');

console.log(Math.round(Math.random() * 100));
console.log(Math.round(Math.random() * 100));
console.log(Math.round(Math.random() * 100));
console.log(Math.round(Math.random() * 100));
console.log(Math.round(Math.random() * 100));
console.log(Math.round(Math.random() * 100));

console.log('=========================================');

Math.round(2.5);
//console.log(Math.PI);
//console.log(Math.PI);
//console.log(Math.PI);

/* 
let fiat = new auto(4, 'rojo', 'fiat', 'uno', 2000);

fiat.arrancar(); */


/* let Math = new Math(3.149843545);

Math.PI; */












//Ejemplos de funciones con Eventos nativos de JS

//evento doble click
function doble() {
    alert('Doble click en el elemento');
}

//evento de teclado
const contador = () => {
    console.log('Presionaste restar');
    console.log(window);
}



//Validaciones con typeof

/*  console.log(typeof numUno);

if(nombre == typeof String){
    todo bien
}else {
    la edad tienen que ser un número
}

12 / 100

doce 
*/
