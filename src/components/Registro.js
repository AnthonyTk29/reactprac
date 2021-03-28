import logo from '../assets/images/logo.svg';
import './App.css';
import Menu from './Menu.js';
import Regis from './Compregistro.js';

function Registro() {
  var nombre="Anthony Loor";

  return (
    <div className="App"> 
      <div className="sticky">
          <Menu />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body className='App-body'>
        hola
      </body>
    </div>
  );
}

export default Regis;
