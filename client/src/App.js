import logo from "./logo.svg";
import "./App.css";

function App() {
  const url = "http://localhost:5001";
  const getLocations = async () => {
    const result = await fetch(`${url}/api/locations`);
    const json = await result.json();
    return json;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
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
  );
}

export default App;
