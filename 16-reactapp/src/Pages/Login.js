
import Button from "../Componentes/Button";

const Login = () => {

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
                    <div class="">
                        
                        <button type="reset" class="btn btn-danger w-25">
                            Borrar
                        </button>
                    </div>
                </form>

                <Button />
            
            </div>
        </>
    );

}

export default Login;