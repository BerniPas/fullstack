import imagen from '../logo.svg';

const Home = () => {
    return (

        <>
            <div className="App">

            <header className="App-header">

            <img src={imagen} className="App-logo" alt="logo" />


            <p className='mt-5 text-danger'>
                Edit <code>src/App.js</code> and save to reload.
            </p>

            <a 
                className="App-link" 
                href="https://reactjs.org" 
                target="_blank" 
                rel="noopener noreferrer">
                Learn React
            </a>

            </header>

        </div>
        
        </>
    );
}

export default Home;