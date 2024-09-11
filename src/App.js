import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { Audio } from "react-loader-spinner";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello world form react</h1>
        <Audio
          height="80"
          width="80"
          radius="9"
          color="red"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </header>
    </div>
  );
}

export default App;
