/* let alumnos = ['Juan', 'Pedro', 'Pablo', 'Maria', 'Ana'];
console.log(alumnos.length); */


let password = '12345678';
//let email = prompt('Ingresa tu correo electrónico: ');

//logitud de la contraseña
console.log(password.length);


//Ejemplo de validación nativa de JS

function validarPassword() {

    if (password.length >= 8 && typeof String){
        if(password == '12345678'){
            console.log('Hola admin');
        }
        console.log('Contraseña válida');
    } else {
        console.log('Tu contraseña tiene ' + password.length + ' caracteres y no es válida');
        location.href = 'error.html';
    }
    
}

validarPassword();


function validarPass(pass) {

    if (pass.length >= 8 && typeof String){
        if(pass == '12345678'){
            console.log('Hola admin');
        }
        console.log('Contraseña válida');
    } else {
        console.log('Tu contraseña tiene ' + pass.length + ' caracteres y no es válida');
        location.href = 'error.html';
    }
    
}

validarPass(password);

//console.log(pass);
