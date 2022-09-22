import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather default="Sydney" />
        <footer>
          This app was coded by Erin Sladen and is{" "}
          <a
            href="https://github.com/erin-986/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
