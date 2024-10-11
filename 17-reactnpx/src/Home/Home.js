import Carousel from 'react-bootstrap/Carousel';
import imagenUno from '../image/img1.jpg';
import imagenDos from '../image/img2.jpg';
import imagenTres from '../image/img3.jpg';



const Home = () => {

    return (
        <>
                
            <h1 className="tituloCentral">MEGAFIT</h1>
                
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagenUno}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagenDos}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagenTres}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
            );
}

export default Home;