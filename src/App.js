// import logo from './logo.svg';
import './App.css';
import birdhead from './assets/birdhead.jpg';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img
                    src={birdhead}
                    style={{ width: 300, height: 'auto' }}
                    className="App-logo"
                    alt="birdhead"
                />
                {/* <img src={birdhead} className="App-logo" alt="logo" /> */}
                <br />
                <br />
                <p>김태원 바보</p>
                {/* <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a> */}
            </header>
        </div>
    );
}

export default App;
