import Nav from 'react-bootstrap/Nav';

const Navegacion = () =>  {
    return (
        <Nav>
            <Nav.Item>
                <Nav.Link href="/">
                    Home
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/formulario">
                    Formulario
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/usuarios">
                    Usuarios
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navegacion;