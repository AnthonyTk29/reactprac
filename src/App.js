import logo from './logo.svg';
import './App.css';
import Login from './components/Login.js';
import Menu from './components/Menu.js';

function App() {
  return (
    <div className="App">
      <div className="sticky">
            <Menu />
        </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Login />
      </header>
    </div>
  );
}

export default App;
