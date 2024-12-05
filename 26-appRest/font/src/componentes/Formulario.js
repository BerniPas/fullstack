
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Imagen from './Imagen';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function Formulario() {

    const [nombre, setNombre] = useState(''); // const nombre = ''
    const [email, setEmail] = useState(''); // const email = ''
    const [password, setPassword] = useState(''); // const password = ''

    const handleSubmit = async(e) => {
        e.preventDefault();

/*         const persona = {
            nombre,
            email,
            password
        } */
        
        try {

            await axios.post('http://localhost:9000/user/register', {
                nombre,
                email,
                password
            });

            handleReset();

            Swal.fire({
                title: 'Enviado!',
                text: 'Click para seguir',
                icon: 'success',
                confirmButtonText: 'Cool'
            })

            console.log('Datos enviados correctamente');

        } catch (error) {

            console.log('Error al enviar los datos ' + error);

            handleReset();
            
            Swal.fire({
                title: 'Error!',
                text: 'Hubo un error  al enviar los datos',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            
        }
    }

    const handleReset = () => {
        setNombre('');
        setEmail('');
        setPassword('');
    }


    return (
        <>
        <h1 className='container mt-5 text-center'>
            Formulario de Registro
        </h1>
        <div className='d-flex container mt-5 text-center'>
            <Form className='w-75' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} 
                        placeholder="Tu nombre" 
                        required
                        />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com" 
                        required
                        />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password" 
                        value={password}
                        onChange={(e) =>setPassword(e.target.value)}
                        required
                        />
                </Form.Group>
                <div className='d-flex justify-content-between'>
                    <Button variant="success" type="submit">Enviar Datos</Button>
                    <Button variant="warning" onClick={handleReset}>Limpiar Campos</Button>
                </div>
            </Form>

            <Imagen />
        </div>
        </>
    );
}

export default Formulario;
