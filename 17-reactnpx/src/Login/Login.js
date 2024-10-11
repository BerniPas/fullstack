import './login.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Login = () => {

    /* variables en JS nativo - no lo usamos en React*/
    //let mail = document.getElementById('email').value; // pepe@gmail.com

    //let mail = '';

    //mail = 'juan@gmaiñl.com'


    /* variables en React - useState = manejar los estados */
    const [email, setEmail] = useState('pepe@gmail.com');
    
    
    const navigate = useNavigate();


    
    
    const loginUser = () => {

        alert("Login realizado");


        console.log(email);
        

       // window.location.href = '/'; // Redirecciona a la página principal en js nativo

        navigate('/admin');         // Redirecciona a la página principal en react

    }

    return(

        <>
            <h1 class="text-center mt-5">
                Login React
            </h1>

            <div class="container">

                <form class="w-75">
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="mínimo de 8 caracteres" />
                    </div>

                    <div className='d-flex mt-5 justify-content-around'>                       
                            <button type="reset" class="btn btn-danger w-25">
                                Borrar
                            </button>
                            <button type="submit" onClick={loginUser} class="btn btn-primary w-25">
                                Login
                            </button>
                    </div>
                </form>
            </div>
        </>
    );

}


export default Login;