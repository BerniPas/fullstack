
//database
let email = 'admin@gmail.com';
let password = '1234';


// recibimos datos del user
let emailUser = prompt('Introduce tu Email: ');
let passwordUser = prompt('Introduce tu Password: ');

console.log(window);

//comparar los datos del user con la database
if(email == emailUser && password == passwordUser){
    window.location = './index.html';
    //alert('Bienvenido a la plataforma bancaria');
}