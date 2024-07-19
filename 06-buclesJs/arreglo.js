

/* un bucle es un ciclo que repite una estructura de código */
console.log('Imprimo el archivo de JS');
console.log('Imprimo el archivo de JS');
console.log('Imprimo el archivo de JS');
console.log('Imprimo el archivo de JS');

// variable del arreglo o array
let pepe = 'Pepe';
let pepes = 'Pepe';
let pepess = 'Pepe';


// index (n-1)    0       1       2         3       4      5        6       7       8         9
let alumnos = ['Juan', 'Pepe', 'Marta', 'Pedro', 'Luis', 'Ana', 'Rosa', 'Maria', 'Carlos', 'Jorge'];

let productos = ['Coca', 'Fanta', 'Sprite', 'Pepsi', 'Mirinda', '7up', 'Manzanita', 'Jumex', 'Boing', 'Del Valle'];

console.log(alumnos); //impreimos el array
console.log(productos); //impreimos el array

console.log(alumnos[0]);
console.log(alumnos[1]);
console.log(alumnos[2]);
console.log(productos[6]);

//función de contar los elementos de un array
console.log(alumnos.length);

//info
//1. variable local
//2. condición
//3. incremento

//Ejemplo del bucle
for(let index = 0 ; index < 10 ; index++){
    console.log('Imprimo el archivo de JS');
    console.log(index);
}

console.log('================================================');

//Imprimo el array de alumnos de uno en uno
for(let index = 0 ; index < alumnos.length ; index++){
    console.log(alumnos[index]);
    console.log(index);
}

console.log('================================================');

//Imprimo el array de alumnos de tres en tres
for(let index = 0 ; index < alumnos.length ; index += 3){
    console.log(alumnos[index]);
    console.log(index);
}

console.log('================================================');



//los arreglos tienen algunas funciones por defecto
//agregar elemnentos al final del array
alumnos.push('Javier');

for(let index = 0 ; index < alumnos.length ; index++){
    console.log(alumnos[index]);
}


console.log('================================================');

//index              0       1       2     3       4          5    6       7 
let persona = [ 12345648, 'Juan', 'Perez', 25, 'Calle 123', true, 9.5, 'México'];
console.log(persona[1]);

//objetos literales de JS
let personaDos = {
    nombre: 'Pepe',
    apellido: 'Perez',
    edad: 25,
    direccion: 'Calle 123',
    casado: true,
    calificacion: 9.5,
    pais: 'Argentino'
};

console.log(personaDos.nombre);
console.log(personaDos.pais);

console.log(persona);
console.log(personaDos);

let empleadosEmpresa = [ 
    {
        nombre: 'Pepe',
        apellido: 'Perez',
        edad: 25,
        direccion: 'Calle 123',
        casado: true,
        calificacion: 9.5,
        pais: 'Argentino'
    },
    {
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 25,
        direccion: 'Calle 123',
        casado: true,
        calificacion: 9.5,
        pais: 'Argentino'
    },
    {
        nombre: 'María',
        apellido: 'Perez',
        edad: 25,
        direccion: 'Calle 123',
        casado: true,
        calificacion: 9.5,
        pais: 'Argentino'
    },
    {
        nombre: 'Juana',
        apellido: 'Perez',
        edad: 25,
        direccion: 'Calle 123',
        casado: true,
        calificacion: 9.5,
        pais: 'Argentino'
    }
];


console.log(empleadosEmpresa);
console.log(empleadosEmpresa[0].nombre);

for (let index = 0; index < empleadosEmpresa.length; index++) {
    console.log(empleadosEmpresa[index].nombre);
    
}
