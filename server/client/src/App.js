import logo from "./logo.svg";
import "./App.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD9RQMn8hzONUy6uGxWQ9vvUE8xxB1hwos",
  authDomain: "lookbook-eb869.firebaseapp.com",
  projectId: "lookbook-eb869",
  storageBucket: "lookbook-eb869.appspot.com",
  messagingSenderId: "244043039292",
  appId: "1:244043039292:web:5c047280d55a0d97127939",
  measurementId: "G-1X1T5292R2",
};

function App() {
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
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
