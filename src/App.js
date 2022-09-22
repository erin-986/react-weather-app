import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <p>Weather App</p>
          <Weather />
        </header>
      </div>
    </div>
  );
}
