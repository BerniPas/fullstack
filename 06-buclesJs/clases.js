
//POO => Programación Orientada a Objetos
// Java - PHP - C - C++ - C# - Python - Ruby - TS
class Auto{

    //atributos
    color = '';
    marca = '';
    modelo = '';
    puertas = 0;

    //constructor
    constructor(color, marca, modelo, puertas){
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.puertas = puertas;
    }

    //métodos
    encender(){
        console.log('El auto se ha encendido');
    }   

    apagar(){
        console.log('El auto se ha apagado');
    }

    acelerar(){
        console.log('El auto está acelerando');
    }

}


//instanciar una clase en un objeto
let miAuto = new Auto('Rojo', 'Toyota', 'Corolla', 'Argentina', 250000, 4);

//le pregunto a miAuto de qué tipo de variabe es
console.log(typeof miAuto);


miAuto.acelerar();


let tuAuto = {
    color: 'verde',
    marca: 'Ford',
    modelo: 'Fiesta',
    puertas: 2,
    pais: 'México',
    precio: 500000,
    encender: function(){
        console.log('El auto se ha encendido');
    },
    apagar(){
        console.log('El auto se ha apagado');
    },
    acelerar(){
        console.log('El auto está acelerando');
    }
};

tuAuto.acelerar();
console.log(typeof tuAuto);

let nombre = 'Juan';


//bases de datos
//JSON => JavaScript Object Notation
let personaTres = {
    "nombre": 'Pepe',
    "apellido": 'Perez',
    "edad": 25,
    "direccion": 'Calle 123',
    "casado": true,
    "calificacion": 9.5,
    "pais": 'Argentino',
    "saldo": 1500,
    "tarjeta": true
};

console.log(typeof personaTres);